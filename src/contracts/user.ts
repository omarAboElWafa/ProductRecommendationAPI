export interface IUser {
  id: number;
  name: string;
  email: string;
  preferences: {
    subCategories: string[];
    brands: string[];
  };
  purchaseHistory: {
    productId: number;
    date: string;
  }[];
}
