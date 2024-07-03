const express = require("express");
const productController = require("../controllers/product.controller");
const { authUser } = require("../middlewares/auth.middleware");
const productRoutes = express.Router();

// middleware

// Create a new Product
productRoutes.post("/add", productController.createProduct);

// Retrieve a single Product with id
productRoutes.get("/:id", productController.findProductById);
// Retrieve all Products
// productRoutes.get("/", productController.findAllProducts);

// find products by query
productRoutes.get("/", productController.findProductsByQuery);

// Update a Product with id
productRoutes.put("/update/:id",authUser, productController.updateProduct);

// Delete a Product with id
productRoutes.delete("/delete/:id",authUser, productController.deleteProduct);

module.exports = { productRoutes };
