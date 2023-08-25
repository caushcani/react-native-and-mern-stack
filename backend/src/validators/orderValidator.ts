import Joi from "joi";

export const orderSchema = Joi.object({
  price: Joi.number().positive().required(),
  data: Joi.array().items(
    Joi.object({
      productId: Joi.string().required(),
      quantity: Joi.number().positive().required(),
    })
  ),
});