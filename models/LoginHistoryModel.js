import mongoose from "mongoose";

const LoginHistorySchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    ipAddress:{
        type:String,
    },
    // session time
    login:{
        type:Date
    },
    logout:{
        type:Date
    }
},
{timestamps:true}
)

const LoginHistory = mongoose.Model('LoginHistory', LoginHistorySchema);

export default LoginHistory
