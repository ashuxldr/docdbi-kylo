import mongoose from "mongoose";

const PersonalisedSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true, // kylo
    },
    desc:{
        type:String,
        required:true,
    },
    amount:{
        type:Number, // 299
    },
    credit:{
        type:Number,
        default:0, // 5000
    },
    validity_days:{
        type:Number, //30
    },
    no_of_user:{
        type:Number // 10
    }
},
{timestamps:true}
)

const Personalised = mongoose.model('Personalised', PersonalisedSchema);

export default Personalised