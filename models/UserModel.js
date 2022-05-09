import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    company:{
        type:String,
    },
    status:{
        type:Number,
    },
    role:{
        type:String,
        default:'user',
        enum:['admin','user']
    }
},
{timestamps:true}
)

const User = mongoose.Model('User', UserSchema);

export default User