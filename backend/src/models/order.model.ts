import mongoose, { Schema, model } from "mongoose";

const orderSchema = new Schema({
  price: {
    type: Number,
  },
  orderData: {
    type: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
        },
        quantity: {
          type: Number,
        },
      },
    ],
  },
});

const Order = model("Order", orderSchema);

export default Order;
