import { Router } from "express";
import UserController from "./user.controller";

class UserRouter {
  userController: UserController;
  constructor(UserController: UserController) {
    this.userController = UserController;
  }
  getRouter = () => {
    const router = Router();
    router.get("/", this.userController.getAllUsers);
    router.post("/", this.userController.createUser);
    router.get("/:id", this.userController.getUserById);
    router.post("/:id", this.userController.updateUser);
    router.delete("/:id", this.userController.deleteUser);
    router.get("/:id/products", this.userController.getUserRecommendations);

    return router;
  };
}

export default UserRouter;
