import { IProduct, ProductInput } from "../../contracts/product";
import { IUser } from "../../contracts/user";
import { IPurchase } from "../../contracts/purchase";
const products = require("../../data/products.json");

class ProductService {
  addProduct = async (product: ProductInput) => {
    try {
      const newProduct = { ...product, id: products.length + 1 };
      products.push(newProduct);
      return newProduct;
    } catch (error) {
      throw error;
    }
  };

  findProductById = async (id: string) => {
    const product = products.find(
      (product: IProduct) => product.id === parseInt(id)
    );
    if (!product) return null;
    return product;
  };

  findProductByAttribute = async (attribute: string, value: string) => {
    const product = products.find(
      (product: any) => product[attribute] === value
    );
    if (!product) return null;
    return product;
  };

  getAllProducts = async () => {
    return products;
  };

  updateProduct = async (id: string, product: ProductInput) => {
    const index = products.findIndex(
      (product: IProduct) => product.id === parseInt(id)
    );
    if (index === -1) return null;
    products[index] = { ...product, id: parseInt(id) };
    return products[index];
  };

  deleteProduct = async (id: string) => {
    const index = products.findIndex(
      (product: IProduct) => product.id === parseInt(id)
    );
    if (index === -1) return null;
    products.splice(index, 1);
    return products;
  };

  getRecommendationsForUser = async (
    user: IUser,
    allProducts: IProduct[] = products
  ) => {
    const { subCategories, brands } = user.preferences;
    const { purchaseHistory } = user;

    const filteredProducts = allProducts.filter(
      (product) =>
        subCategories.includes(product.subCategory) ||
        brands.includes(product.brand) ||
        purchaseHistory.some((purchase) => purchase.productId === product.id)
    );

    const sortedProducts = filteredProducts.sort((productA, productB) => {
      const matchesA = this.calculateMatching(
        productA,
        subCategories,
        brands,
        purchaseHistory
      );
      const matchesB = this.calculateMatching(
        productB,
        subCategories,
        brands,
        purchaseHistory
      );
      return matchesB - matchesA;
    });

    return sortedProducts;
  };

  // private methods
  private calculateMatching = (
    product: IProduct,
    subCategories: string[],
    brands: string[],
    purchaseHistory: IPurchase[] | undefined
  ) => {
    let matches = 0;

    if (purchaseHistory) {
      const purchaseCount = purchaseHistory.filter(
        (purchase) => purchase.productId === product.id
      ).length;
      matches += purchaseCount * 3;
    }
    if (subCategories.includes(product.subCategory)) {
      matches += 2;
    }
    if (brands.includes(product.brand)) {
      matches += 1;
    }
    return matches;
  };
}

export default ProductService;
