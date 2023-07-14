import express from "express";
import {
  createdProductReview,
  createProduct,
  deleteProduct,
  deleteReviews,
  getAllProducts,
  getProductReviews,
  getSingleProduct,
  updateProduct,
} from "../Controllers/productController.mjs";
import { authorizeRole, isAuthenticate } from "../Middleware/auth.mjs";

const productRouter = express.Router();

productRouter.route("/product").get(getAllProducts);
productRouter.route("/product/:id").get(getSingleProduct);

// ----> admin routes
productRouter
  .route("/admin/product")
  .post(isAuthenticate, authorizeRole("admin"), createProduct);
productRouter
  .route("/admin/product/:id")
  .put(isAuthenticate, authorizeRole("admin"), updateProduct);
productRouter
  .route("/admin/product/:id")
  .delete(isAuthenticate, authorizeRole("admin"), deleteProduct);
productRouter.route("/review").get(getProductReviews);

// ------>logins only
productRouter.route("/review").put(isAuthenticate, createdProductReview);
productRouter.route("/review").delete(isAuthenticate, deleteReviews);

export default productRouter;
