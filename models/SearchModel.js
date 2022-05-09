import mongoose from "mongoose";

const SearchSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    selected_filter:{
        type:String
    },
    keywords:{
        type:String
    }
},
{timestamps:true}
)

const Search = mongoose.Model('Search', SearchSchema);

export default Search
