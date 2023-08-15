import Product from "../models/product.model";

class ProductController {
  static createProduct = async (req, res, next) => {
    const { name, description, price, quantity, image } = req.body;
    const product = new Product({
      name,
      description,
      price,
      quantity,
      image,
    });

    await product.save();
    return res.status(200).send({
      result: true,
    });
  };
  static getAllProducts = async (req, res, next) => {
    const allProducts = await Product.find();

    return res.status(200).send({
        result: true,
        products: allProducts
    })
  };
  static deleteProduct = async (req, res, next) => {};
  static editProduct = async (req, res, next) => {};
}

export default ProductController;
