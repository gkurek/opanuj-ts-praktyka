import { z } from 'zod';

export const CartItemSchema = z.object({
  id: z.string().nonempty("ID is required"),
  name: z.string().nonempty("Name is required"),
  price: z.number().positive("Price must be greater than 0"),
  quantity: z.number().int().positive("Quantity must be greater than 0"),
});

export const CartSchema = z.object({
  items: z.array(CartItemSchema).min(1, "Koszyk nie może być pusty"),
  total: z.number().positive("Łączna cena musi być większa od 0"),
});

export type CartItem = z.infer<typeof CartItemSchema>;
export type Cart = z.infer<typeof CartSchema>;