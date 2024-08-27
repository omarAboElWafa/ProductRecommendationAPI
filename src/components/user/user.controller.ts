import { Request, Response } from "express";
import UserService from "./user.service";
import * as helpers from "../../utils/helpers";
import { handleValidationError } from "../../utils/loggers";
import { IUser, UserInput } from "@/contracts/user";

class UserController {
  userService: UserService;
  constructor(UserService: UserService) {
    this.userService = UserService;
  }

  createUser = async (req: Request, res: Response) => {
    try {
      const user: UserInput = req.body;
      const newUser: IUser = await this.userService.addUser(user);
      return res.status(201).send(newUser);
    } catch (error) {
      console.log(error);
      return res.status(400).send(handleValidationError(error));
    }
  };

  getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await this.userService.getAllUsers();
      if (!users) {
        return res.status(404).send({ message: "No users found" });
      }
      return res.status(200).send(users);
    } catch (error) {
      console.log(error);
      return res.status(400).send(handleValidationError(error));
    }
  };

  getUserById = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.findUserById(req.params.id);
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
      return res.status(200).send(user);
    } catch (error) {
      console.log(error);
      return res.status(400).send(handleValidationError(error));
    }
  };

  updateUser = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.updateUser(req.params.id, req.body);
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
      return res.status(200).send(user);
    } catch (error) {
      console.log(error);
      return res.status(400).send(handleValidationError(error));
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    try {
      const deleted = await this.userService.deleteUser(req.params.id);
      if (!deleted) {
        return res.status(404).send({ message: "User not found" });
      }
      return res.status(200).send({ message: "User deleted successfully" });
    } catch (error) {
      console.log(error);
      return res.status(400).send(handleValidationError(error));
    }
  };
}

export default UserController;
