import {Schema, model} from 'mongoose'

const UserSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type: String
    },
    refresh_token:{
        type:String
    },
    refresh_token_expiry:{
        type: Date
    }
});

const User = model('User', UserSchema);

export default User;