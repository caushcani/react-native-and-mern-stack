import {Schema, model} from 'mongoose';

const productSchema = new Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:Number
    },
    quantity:{
        type: Number
    },
    image:{
        type:String
    },
    category:{
        type:String
    }
})

const Product = model('Product', productSchema);
export default Product;