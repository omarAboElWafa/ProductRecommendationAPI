import { Request, Response } from "express";
import ProductService from "./product.service";
import { handleError } from "../../utils/loggers";

class ProductController {
  productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  getAllProducts = async (req: Request, res: Response) => {
    try {
      const products = await this.productService.getAllProducts();
      if (!products) {
        return res.status(404).send({ message: "No products found" });
      }
      return res.status(200).send(products);
    } catch (error) {
      console.log(error);
      return res.status(400).send(handleError(error));
    }
  };

  createProduct = async (req: Request, res: Response) => {
    try {
      const product = req.body;
      const newProduct = await this.productService.addProduct(product);
      return res.status(201).send(newProduct);
    } catch (error) {
      console.log(error);
      return res.status(400).send(handleError(error));
    }
  };

  getProductById = async (req: Request, res: Response) => {
    try {
      const product = await this.productService.findProductById(req.params.id);
      if (!product) {
        return res.status(404).send({ message: "Product not found" });
      }
      return res.status(200).send(product);
    } catch (error) {
      console.log(error);
      return res.status(400).send(handleError(error));
    }
  };

  updateProduct = async (req: Request, res: Response) => {
    try {
      const product = req.body;
      const updatedProduct = await this.productService.updateProduct(
        req.params.id,
        product
      );
      if (!updatedProduct) {
        return res.status(404).send({ message: "Product not found" });
      }
      return res.status(200).send(updatedProduct);
    } catch (error) {
      console.log(error);
      return res.status(400).send(handleError(error));
    }
  };

  deleteProduct = async (req: Request, res: Response) => {
    try {
      const deletedProduct = await this.productService.deleteProduct(
        req.params.id
      );
      if (!deletedProduct) {
        return res.status(404).send({ message: "Product not found" });
      }
      return res.status(200).send(deletedProduct);
    } catch (error) {
      console.log(error);
      return res.status(400).send(handleError(error));
    }
  };
}

export default ProductController;
