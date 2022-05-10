import mongoose from "mongoose";

const WalletSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    credit:{
        type:Number,
        default:0
    },
},
{timestamps:true}
)

const Wallet = mongoose.model('Wallet', WalletSchema);

export default Wallet