import { Category } from "./category";

export interface Item {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}