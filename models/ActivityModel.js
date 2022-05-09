import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    url:{
        type:String,
    },

    seen_status:{
        type:String,
        default:'unseen',
        enum:['unseen','seen']
    },
},
{timestamps:true}
)

const Activity = mongoose.Model('Activity', ActivitySchema);

export default Activity