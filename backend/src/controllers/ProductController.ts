import Product from "../models/product.model";
import { AppError } from "../utils/appError";

class ProductController {
  static createProduct = async (req, res, next) => {
    const { name, description, price, quantity, image, category } = req.body;
    const product = new Product({
      name,
      description,
      price,
      quantity,
      image,
      category,
    });

    await product.save();
    return res.status(200).send({
      result: true,
    });
  };

  static getAllProducts = async (req, res, next) => {
    const { category } = req.body;
    let searchBy = category ? { category: category } : {};

    const allProducts = await Product.find(searchBy);

    return res.status(200).send({
      result: true,
      products: allProducts,
    });
  };

  static search = async (req, res, next) => {
    const { searchTerm } = req.body;

    try {
      const result = await Product.find({$text:{
        $search:searchTerm
      }});
      if (result) {
        return res.status(200).send({
          message: result,
        });
      }
    } catch (error) {
      return new AppError(error);
    }
  };

  static deleteProduct = async (req, res, next) => {};

  static editProduct = async (req, res, next) => {};
}

export default ProductController;
