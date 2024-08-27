import express, { Express } from "express";
import cors from "cors";
import routes from "./loaders/routes";
import { PORT, DATA_PATH } from "./utils/config";

async function startServer(): Promise<void> {
  const app: Express = express();
  // Load data from data.json in memory and set it in the app
  const data = require(DATA_PATH);
  app.set("data", data);

  // Midlewares
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  app.use(cors());
  // Load routes
  routes(app);

  // Start server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start the server:", error);
});
