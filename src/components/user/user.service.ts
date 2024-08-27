import users from "@/data";
import { IUser, UserInput } from "@/contracts/user";
import * as cache from "../../utils/cache";
import { REFRESH_TOKEN_EXPIRY_FOR_CACHE } from "../../utils/config";

class UserService {
  addUser = async (user: UserInput<IUser>) => {
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

  getAllAdmins = async () => {
    return await User.find({ isAdmin: true }).lean();
  };
}

export default UserService;
