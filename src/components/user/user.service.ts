import { IUser, UserInput } from "@/contracts/user";
import ProductService from "../product/product.service";
const users = require("../../data/users.json");

class UserService {
  productService: ProductService;
  constructor(productService: ProductService) {
    this.productService = productService;
  }

  addUser = async (user: UserInput) => {
    try {
      const newUser = { ...user, id: users.length + 1 };
      users.push(newUser);
      return newUser;
    } catch (error) {
      throw error;
    }
  };

  findUserByEmail = async (email: string) => {
    return users.find((user: any) => user.email === email);
  };

  findUserById = async (id: string) => {
    const user = users.find((user: any) => user.id === parseInt(id));
    if (!user) return null;
  };

  updateUser = async (id: string, toBeUpdated: Object) => {
    const user = users.find((user: any) => user.id === parseInt(id));
    if (!user) return null;
    const updatedUser = { ...user, ...toBeUpdated };
    users[parseInt(id) - 1] = updatedUser;
    return updatedUser;
  };

  getAllUsers = async () => {
    return users;
  };

  deleteUser = async (id: string) => {
    return users.splice(parseInt(id) - 1, 1);
  };

  getUserRecommendations = async (id: string) => {
    const user = users.find((user: any) => user.id === parseInt(id));
    if (!user) return null;
    const productRecommendations =
      this.productService.getRecommendationsForUser(user);
    if (!productRecommendations) return null;
    return productRecommendations;
  };
}

export default UserService;
