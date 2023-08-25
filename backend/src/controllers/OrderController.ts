import Order from "../models/order.model";
import Product from "../models/product.model";
import { AppError } from "../utils/appError";
import mongoose from "mongoose";
import {Request, Response, NextFunction} from 'express';

class OrderController {
  static createOrder = async (req: Request, res:Response, next:NextFunction) => {
    const { price, data } = req.body;
  
    try {
      const order = new Order({
        price: price,
        orderData: data,
      });

      await order.save();

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

      return res.status(200).send({
        message: "Order added successfully.",
      });
    } catch (error) {
      return new AppError(error);
    }
  };
}

export default OrderController;
