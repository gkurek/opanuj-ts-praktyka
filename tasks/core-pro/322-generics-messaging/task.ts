type MessageType = 'orderCreated' | 'orderCancelled';

interface Order {
  orderId: string;
  items: { productId: string; quantity: number }[];
}

export interface OrderCreatedMessage {
  type: 'orderCreated';
  payload: Order;
}

export interface OrderCancelledMessage {
  type: 'orderCancelled';
  payload: { orderId: string };
}

type OrderMessage = OrderCreatedMessage | OrderCancelledMessage;

export class MessageBus {
  private subscribers: Record<MessageType, ((message: OrderMessage) => void)[]> = {
    orderCreated: [],
    orderCancelled: [],
  };

  subscribe(type: MessageType, subscriber: (message: OrderMessage) => void): void {
    this.subscribers[type].push(subscriber);
  }

  publish<T extends OrderMessage>(message: T): void {
    this.subscribers[message.type].forEach((subscriber) => subscriber(message));
  }
}

export class InventoryStockTracker<T extends MessageBus> {
  private orderHistory: Record<string, Order> = {};

  constructor(
    private bus: T,
    private stock: Record<string, number>,
  ) {
    this.subscribeToMessages();
  }

  private subscribeToMessages(): void {
    this.bus.subscribe('orderCreated', (message) => {
      if (message.type === 'orderCreated') {
        this.orderHistory[message.payload.orderId] = message.payload;
        // Decrease stock for each item in the order
        message.payload.items.forEach((item) => {
          this.stock[item.productId] = (this.stock[item.productId] || 0) - item.quantity;
        });
      }
    });

    this.bus.subscribe('orderCancelled', (message) => {
      if (message.type === 'orderCancelled') {
        const order = this.orderHistory[message.payload.orderId];
        if (order) {
          // Restore stock for cancelled order
          order.items.forEach((item) => {
            this.stock[item.productId] = (this.stock[item.productId] || 0) + item.quantity;
          });
          delete this.orderHistory[message.payload.orderId];
        }
      }
    });
  }

  getStock(productId: string): number {
    return this.stock[productId] || 0;
  }
}
