import Joi from "joi";

export const productSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).max(500).required(),
  price: Joi.number().min(0).required(),
  quantity: Joi.number().integer().min(0).required(),
  image: Joi.string().uri().required(),
  category: Joi.string().valid("shoes", "jackets", "dresses").required(),
});

export const sortElementSchema = Joi.object({
  column: Joi.string()
    .valid("name", "price", "description", "category")
    .required(),
  operation: Joi.string().valid("asc", "dsc").required(),
});

export const getAllSchema = Joi.object({
  filter: Joi.array().optional(),
  search: Joi.string().allow("").optional(),
  page: Joi.number().integer().min(1).default(1),
  perPage: Joi.number().integer().min(1).default(10),
  sortBy: Joi.array()
    .items(sortElementSchema)
    .default([{ column: "name", operation: "asc" }]),
});
