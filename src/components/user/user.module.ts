import UserController from "./user.controller";
import UserService from "./user.service";
import UserRouter from "./user.router";
import ProductService from "../product/product.service";

const productService = new ProductService();
const userService = new UserService(productService);
const userController = new UserController(userService);
const userRouter = new UserRouter(userController);

export default {
  service: userService,
  controller: userController,
  router: userRouter.getRouter(),
};
