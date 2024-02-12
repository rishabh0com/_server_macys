const { ProductModel } = require("../models/product.model");
const ApiResponse = require("../utils/ApiResponse");
const ApiError = require("../utils/ApiError");

// get request to create a product :
const createProduct = async (req, res) => {
  // if (req.body) {
  //   res.status(201).send({ message: "Product created successfully"});
  // }
  const { title, price, category, subCategory, sizes, images, color } = req.body;
  try {
    // Create a Product
    const product = new ProductModel({
      title,
      price,
      category,
      subCategory,
      images,
      sizes,
      color,
    });
    // Save Product in the database
    const data = await product.save();
    if (!data) {
      throw new ApiError(400, "Product not created");
    }
    res
      .status(201)
      .send(new ApiResponse(200, data, "Product created successfully"));
  } catch (error) {
    res.status(500).send({ message: error.message, ...error });
  }
};

// find a single product by id
const findProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await ProductModel.findById(id);
    if (!product) {
      throw new ApiError(400, "Product not found");
    }
    res.status(200).send(new ApiResponse(200, product, "Product found"));
  } catch (error) {
    res.status(500).send({ message: error.message, ...error });
  }
}

// get request to retrieve all products :
const findAllProducts = async (req, res) => {
  try {
    const data = await ProductModel.find();
    if (!data) {
      throw new ApiError(400, "Products not found");
    }
    res.status(200).send(new ApiResponse(200, data, "Products found"));
  } catch (error) {
    res.status(500).send({ message: error.message, ...error });
  }
};

// find protucts by query
const findProductsByQuery = async (req, res) => {
  const query = req.query;
  // console.log(query)
  try {
    const data = await ProductModel.find(query);
    if (!data) {
      throw new ApiError(400, "Products not found");
    }
    // console.log(data)
    res.status(200).send(new ApiResponse(200, data, "Products found"));

  }
  catch (error) {
    res.status(500).send({ message: error.message, ...error });
  }
};

// put request to update a product :
const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await ProductModel.findByIdAndUpdate(id, req.body);
    if (!product) {
      throw new ApiError(400, "Product not found");
    }
    res.status(200).send(new ApiResponse(200, product, "Product updated"));
  } catch (error) {
    res.status(500).send({ message: error.message, ...error });
  }
};

// delete request to delete a product :
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await ProductModel.findByIdAndDelete(id);
    if (!product) {
      throw new ApiError(400, "Product not found");
    }
    res.status(200).send(new ApiResponse(200, product, "Product deleted"));
  } catch (error) {
    res.status(500).send({ message: error.message, ...error });
  }
};

module.exports = { createProduct, findAllProducts, findProductsByQuery, updateProduct, deleteProduct, findProductById };

