import Order from "../models/order.model";
import Product from "../models/product.model";
import { AppError } from "../utils/appError";
import mongoose from "mongoose";


class OrderController {
  static createOrder = async (req, res, next) => {
    const { price, data } = req.body;
    const order = new Order({
      price: price,
      orderData: data,
    });

    try {
      const productUpdates = data.map(item => ({
        id: new mongoose.Types.ObjectId(item.productId),
        quantity: item.quantity
      }));
      const bulkUpdateOperations = productUpdates.map(update => ({
        updateOne: {
          filter: { _id: update.id },
          update: { $inc: { quantity: -update.quantity } }
        }
      }));

      await Product.bulkWrite(bulkUpdateOperations);


      //now, save order
      await order.save();
      return res.status(200).send({
        message: "Order added successfully.",
      });
    } catch (error) {
      return new AppError(error);
    }
  };
}

export default OrderController;
