import { Express } from "express";
import userModule from "../components/user/user.module";
import productModule from "../components/product/product.module";

export default (app: Express) => {
  app.use("/users", userModule.router);
  app.use("/products", productModule.router);
};
