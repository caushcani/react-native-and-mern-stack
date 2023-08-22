import Order from "../models/order.model";
import Product from "../models/product.model";
import { AppError } from "../utils/appError";
const {
  Types: { ObjectId: ObjectId },
} = require("mongoose");

class OrderController {
  static createOrder = async (req, res, next) => {
    const { price, data } = req.body;
    const order = new Order({
      price: price,
      orderData: data,
    });

    //update products quantity
    // data.forEach(async(el) => {
    //   await Product.findOneAndUpdate(
    //     {
    //       _id: el.productId,
    //     },
    //     {
    //       $inc: { quantity: -el.quantity },
    //     }
    //   );
    // });

    //update products quantity
    //TODO: fix, not working
    try {
      const a = await Product.updateMany(
        {
          _id: {
            $in: data.map(d => d.productId),
          }, // filter by product ids in data array
        },
        [
          {
            $set: {
              quantity: {
                $subtract: [
                  "$quantity", // current quantity of the product
                  {
                    $arrayElemAt: [
                      // find the quantity from the data array that matches the product id
                      {
                        $map: {
                          input: {
                            $filter: {
                              input: data,
                              as: "el",
                              cond: { $eq: ["$$el.productId", "$_id"] },
                            },
                          },
                          as: "el",
                          in: "$$el.quantity",
                        },
                      },
                      0,
                    ],
                  },
                ],
              },
            },
          },
        ]
      );

      console.log("A", a);

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
