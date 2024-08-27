# ProductRecommendationAPI

## Structure

<span>
<pre>
.<br>
├── package-lock.json
├── package.json
└── src
    ├── app.ts
    ├── index.ts
    ├── components
    │   └── user
    │       ├── user.controller.ts
    │       ├── user.entities.ts
    │       ├── user.module.ts
    │       ├── user.router.ts
    │       └── user.service.ts
    │
    ├── contracts
    │   ├── errors.ts
    │   ├── mailer.ts
    │   └── user.js
    ├── loaders
    │   └── routes.ts
    │
    ├── utils
    │    ├── cache.ts
    │    ├── config.ts
    │    ├── helpers.ts
    │    ├── hooks.ts
    │    ├── loggers.ts
    │    ├── mailService.ts
    │    ├── middlewares.ts
    │    └── sms.ts
    │
    ├── index.ts
    │
    └── server.ts

</pre>
</span>

## Getting started

### Requirements

- Install [Docker](https://docs.docker.com/get-docker)
- Install [Node.js](https://nodejs.org/en/download/) version 16.14 or above (which can be checked by running `node -v`).

#### Running the project locally

1 - Build the project

```bash
docker compose build
```

2 - Run the project

```bash
docker compose up
```

## How is the project structured?

### Components

The application was divided into components. Each component has its own module, where we instantiate the controller, service, and router. This helps us keep our code clean and maintainable.

```js
const userService = new UserService();
const userController = new UserController(userService);
const userRouter = new UserRouter(userController);
```

---

### Entities

you’ll also have an entities file where you'll define the DB entities of your component.

```js
export default mongoose.model < IUser > ("User", UserSchema);
```

---

### Routers

Within the router, you should define the URLs of our backend API and call the corresponding controller functions to handle requests.

```js
class UserRouter {
  userController: UserController;
  constructor(UserController: UserController) {
    this.userController = UserController;
  }
  getRouter = () => {
    const router = Router();
    router.post(
      "/register",
      [checkPhone, checkEmail],
      this.userController.register
    );
  };

  // ... rest of the router methods
}
```

---

### Controllers

The controller receives incoming requests from the router and prepares the necessary parameters to call the appropriate service functions. Here, we define the logic for handling each API endpoint of our backend.

```js
class UserController {
  userService: UserService;
  constructor(UserService: UserService) {
    this.userService = UserService;
  }

  register = async (req: Request, res: Response) => {
    // ... controller logic
  };

  // ... rest of the controller methods
}
```

---

### Services

The service is responsible for handling the business logic of our application. It receives the necessary parameters from the controller, calls the corresponding repository functions, and returns the response to the controller.

```js
class UserService {
  addUser = async (user: UserInput<IUser>) => {
    try {
      const newUSer = new User(user);
      return await newUSer.save();
    } catch (error) {
      throw error;
    }
  };

  // ... rest of the service methods
}
```

---

### Modules

The module is where we instantiate the controller, service, and router. This helps us keep our code clean and maintainable.

```js
const userService = new UserService();
const userController = new UserController(userService);
const userRouter = new UserRouter(userController);
```

---

### Main entry points

- index.ts
- server.ts
- loaders/routes.ts
