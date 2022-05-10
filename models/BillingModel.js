import mongoose from "mongoose";

const BillingSchema = new mongoose.Schema({
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
},
{timestamps:true}
)

const Billing = mongoose.model('Billing', BillingSchema);

export default Billing