import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    mobile:{
        type:Number,
    },
    email:{
        type:String,
    },
    address1:{
        type:String
    },
    address2:{
        type:String
    },
    city:{
        type:String,
    },
    state:{
        type:String,
    },
    country:{
        type:String,
    },
    subscriptionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Subscription'
    },
    subscription_type:{
        type:String,
        default:'free',
        enum:['free','paid']
    },
    subscription_validity:{
        type:String,
    },
},
{timestamps:true}
)

const Invoice = mongoose.Model('Invoice', InvoiceSchema);

export default Invoice