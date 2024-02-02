const mongoose = require("mongoose");

const productSchema =new mongoose.Schema(
  {
    category: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    images: { type: Array, required: true },
    colors:  [{name:String,code:String}],
  },
  { versionKey: false }
);
const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };
