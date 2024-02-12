const mongoose = require("mongoose");

const cartItemSchema = mongoose.Schema(
  {
    userId: { type: String, ref: "user" },
    product: { type: Object, ref: "product" },
  },
  { versionKey: false }
);

const CartItemModel = mongoose.model("cartItem", cartItemSchema);
module.exports = { CartItemModel};