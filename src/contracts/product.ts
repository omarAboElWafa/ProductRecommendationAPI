export interface IProduct {
  id: number;
  name: string;
  category: string;
  subCategory: string;
  brand: string;
}

// exclude id
export type ProductInput = Omit<IProduct, "id">;
