const express = require("express");
const cartController = require("../controllers/cart.controller.js")
const { authUser } = require("../middlewares/auth.middleware");
const cartRoutes = express.Router();

// middleware

// Create a new Cart
cartRoutes.post("/add",authUser, cartController.createCart);
// Get all Carts from the database
cartRoutes.get("/find",authUser, cartController.findAllCart);
// delete cart item 
cartRoutes.delete("/delete/",authUser, cartController.deleteCart);

module.exports = { cartRoutes };