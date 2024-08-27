import express, { Express } from "express";
import cors from "cors";
import routes from "./loaders/routes";
import { PORT } from "./utils/config";

async function startServer(): Promise<void> {
  const app: Express = express();

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
