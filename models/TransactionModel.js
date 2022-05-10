import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    paymentId:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
    },
    subscription_type:{
        type:String,
        default:'free',
        enum:['free','paid']
    },
    subscription_validity:{
        type:String,
    },
    payment_status:{
        type:String
    }
},
{timestamps:true}
)

const Transaction = mongoose.model('Transaction', TransactionSchema);

export default Transaction