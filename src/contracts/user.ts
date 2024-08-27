import { IPurchase } from "./purchase";

export interface IUser {
  id: number;
  name: string;
  email: string;
  preferences: {
    subCategories: string[];
    brands: string[];
  };
  purchaseHistory: IPurchase[];
}

export type UserInput = Omit<IUser, "id">;
