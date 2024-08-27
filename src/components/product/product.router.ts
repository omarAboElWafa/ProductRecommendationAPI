import { Router } from "express";
import ProductController from "./product.controller";

class ProductRouter {
  productController: ProductController;

  constructor(ProductController: ProductController) {
    this.productController = ProductController;
  }

  getRouter = () => {
    const router = Router();
    router.get("/", this.productController.getAllProducts);
    router.post("/", this.productController.createProduct);
    router.get("/:id", this.productController.getProductById);
    router.put("/:id", this.productController.updateProduct);
    router.delete("/:id", this.productController.deleteProduct);

    return router;
  };
}

export default ProductRouter;
