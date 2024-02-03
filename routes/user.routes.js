const express = require("express");
const userController = require("../controllers/user.controller.js");

const userRoutes = express.Router();

// Create a new User
userRoutes.post("/register", userController.createUser);

//refresh token
userRoutes.get("/refreshToken", userController.refreshToken);

// login
userRoutes.post("/login", userController.loginUser);

//logout
userRoutes.get("/logout", userController.logoutUser);

//Retrieve a  User
userRoutes.get("/:id", userController.findUser);

// retrieve all users
userRoutes.get("/", userController.findAllUsers);

// Update a User with id
userRoutes.put("/update/:id", userController.updateUser);

// Delete a User with id
userRoutes.delete("/delete/:id", userController.deleteUser);

module.exports = { userRoutes };
