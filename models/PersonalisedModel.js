import mongoose from "mongoose";

const PersonalisedSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
    },
    credit:{
        type:Number,
        default:0,
    },
    validity_days:{
        type:Number,
    },
    no_of_user:{
        type:Number
    }
},
{timestamps:true}
)

const Personalised = mongoose.model('Personalised', PersonalisedSchema);

export default Personalised