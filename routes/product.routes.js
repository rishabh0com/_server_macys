const express = require("express");
const productController = require("../controllers/product.controller");
const productRoutes = express.Router();

// Create a new Product
productRoutes.post("/add", productController.createProduct);

// Retrieve all Products
productRoutes.get("/", productController.findAllProducts);

// Update a Product with id
productRoutes.put("/update/:id", productController.updateProduct);

// Delete a Product with id
productRoutes.delete("/delete/:id", productController.deleteProduct);

module.exports = { productRoutes };
