import { Request, Response, NextFunction } from "express";
import Product from "../models/product.model";
import { AppError } from "../utils/appError";

class ProductController {
  static createProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { name, description, price, quantity, image, category } = req.body;

    try {
      const product = new Product({
        name,
        description,
        price,
        quantity,
        image,
        category,
      });

      await product.save();
      return res.status(201).send({
        result: true,
      });
    } catch (error) {
      return new AppError(error);
    }
  };

  static getAllProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { filter, search, page = 1, perPage = 10, sortBy } = req.body;

    const query = {};
    filter.forEach((filterItem) => {
      const key = Object.keys(filterItem)[0];
      const value = filterItem[key];
      query[key] = value;
    });

    if (search) {
      query["$text"] = { $search: search };
    }

    let sort;
    if (sortBy) {
      // Build the sort object based on sortBy array
      sort = sortBy.reduce((sortObj, element) => {
        sortObj[element.column] = element.operation === "asc" ? 1 : -1;
        return sortObj;
      }, {});
    }

    try {
      const totalCount = await Product.countDocuments(query);

      const products = await Product.find(query)
        .sort(sort)
        .skip((page - 1) * perPage)
        .limit(perPage);

      const response = {
        success: true,
        totalCount,
        currentPage: page,
        perPage,
        elementsInPage: products.length,
        data: products,
      };
      return res.status(200).send(response);
    } catch (error) {
      return new AppError(error);
    }
  };

  static deleteProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};

  static editProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};
}

export default ProductController;
