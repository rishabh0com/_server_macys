const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const {CartItemModel} = require("../models/cartItem.model")

const createCart = async (req, res) => {
    const { userId } = req.query;
    // console.log("query",req.query)
    const item = await CartItemModel.findOne({product:req.body,userId:userId});
    try {
        if(item) throw new ApiError(400, "Product already present in cart !");
        const cart = await CartItemModel.create({ userId,product:req.body});
        if (!cart) throw new ApiError(400, "Product not addeded");
        res.send(new ApiResponse(200, cart, "Product added successfully"));
    } catch (error) {
        res.status(500).send({ message: error.message, ...error });
    }
}

// get request to retrieve all cart item
const findAllCart = async (req, res) => {
    const userId = req.query.userId;
    // console.log("in find all cart",userId)
    try {
        const cart = await CartItemModel.find({userId:userId});
        if (!cart) throw new ApiError(400, "Product not found");
        res.send(new ApiResponse(200, cart, "Products retrieved successfully"));
    } catch (error) {
        res.status(500).send({ message: error.message, ...error });
    }
};

// delete request to delete a cart item
const deleteCart = async (req, res) => {
    const {userId,proId} = req.query;
    console.log("pro",req.query)
    try {
        const deleteItem = await CartItemModel.find({ userId: userId });
        // console.log("pro", deleteItem)
        // deleteItem.forEach(element => {
        //     console.log(element._id)
        // });
        const dItem = deleteItem.filter((item) => item.product.product._id == proId);
        // console.log("pro2", dItem)
        const cart = await CartItemModel.findByIdAndDelete(dItem[0]._id);
        if (!cart) throw new ApiError(400, "Product not found");
        res.send(new ApiResponse(200, cart, "Product deleted successfully"));
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: error.message, ...error });
    }
};

module.exports = { createCart, findAllCart, deleteCart };
