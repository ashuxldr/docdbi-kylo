import mongoose from "mongoose";

const SuppresionSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    exclusion_type:{
        type:String
    },
    // data id
},
{timestamps:true}
)

const Suppresion = mongoose.Model('Suppresion', SuppresionSchema);

export default Suppresion
