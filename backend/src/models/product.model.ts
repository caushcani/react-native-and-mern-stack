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


//include string fields in the index
productSchema.index({
    "$**":"text"
})

const Product = model('Product', productSchema);
export default Product;