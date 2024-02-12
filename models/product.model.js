const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    images: { type: Array, required: true },
    sizes: { type: Array, required: false, default: "NO SIZE" },
    color: { type: String },
  },
  { versionKey: false }
);
const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };
