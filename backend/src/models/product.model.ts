import {Schema, model} from 'mongoose';

const productSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0, 
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  });


//include string fields in the index
productSchema.index({
    "$**":"text"
})

const Product = model('Product', productSchema);
export default Product;