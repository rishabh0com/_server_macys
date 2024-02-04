const express = require("express");
const productController = require("../controllers/product.controller");
const { authUser } = require("../middlewares/auth.middleware");
const productRoutes = express.Router();

// middleware
productRoutes.use(authUser);

// Create a new Product
productRoutes.post("/add", productController.createProduct);

// Retrieve all Products
productRoutes.get("/", productController.findAllProducts);

// find products by query
productRoutes.get("/query", productController.findProductsByQuery);

// Update a Product with id
productRoutes.put("/update/:id", productController.updateProduct);

// Delete a Product with id
productRoutes.delete("/delete/:id", productController.deleteProduct);

module.exports = { productRoutes };
