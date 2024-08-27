import { IUser } from "../contracts/user";
import { IProduct } from "../contracts/product";
function getRecommendationsForUser(user: IUser, products: IProduct[]) {
  const { subCategories, brands } = user.preferences;

  // Filter and sort products based on user's preferences
  return products
    .filter(
      (product) =>
        subCategories.includes(product.subCategory) ||
        brands.includes(product.brand)
    )
    .sort((a, b) => {
      const aMatches =
        (subCategories.includes(a.subCategory) ? 2 : 0) +
        (brands.includes(a.brand) ? 1 : 0);
      const bMatches =
        (subCategories.includes(b.subCategory) ? 2 : 0) +
        (brands.includes(b.brand) ? 1 : 0);
      return bMatches - aMatches; // Higher matches come first
    });
}

export { getRecommendationsForUser };
