import mongoose from "mongoose";

const DownloadSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    downloaded_leads:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Leads',
    }],
},
{timestamps:true}
)

const Download = mongoose.model('Download', DownloadSchema);

export default Download
