import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    status:{
        type:Boolean,
        required:true,
        default:false
    },
},
{timestamps:true}
)

const Category = mongoose.model('Category', CategorySchema);

export default Category
