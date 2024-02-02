const mongoose = require("mongoose");

// const colorsSchema = new mongoose.Schema({
//   color: { type: String, required: true },
//   code: { type: String, required: true },
// });
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
/**
 * const cellSchema = new mongoose.Schema({type: String,count: Number});
const matrixSchema = new mongoose.Schema({matrix: [[cellSchema]]});
 */
const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };
