const enum NotificationType {
  EMAIL = 'email',
  SMS = 'sms',
  SYSTEM = 'system',
}

type EmailNotification = {
  type: NotificationType.EMAIL;
  emailAddress: string;
  content: string;
};

type SMSNotification = {
  type: NotificationType.SMS;
  phoneNumber: number;
  message: string;
};

type SystemNotification = {
  type: NotificationType.SYSTEM;
  log: string;
};

type Notification = EmailNotification | SMSNotification | SystemNotification;

export function getNotificationText(notification: Notification): string {
  switch (notification.type) {
    case NotificationType.EMAIL:
      return notification.content;
    case NotificationType.SMS:
      return notification.message;
    case NotificationType.SYSTEM:
      return notification.log;
    default:
      return 'Unknown notification';
  }
}
