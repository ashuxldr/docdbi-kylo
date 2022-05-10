import mongoose from "mongoose";

const TicketManagementSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    ticket_title:{
        type:String
    },
    desc:{
        type:String
    },
    ticket_status:{
        type:String,
        enum:['solved','running'],
        default:'running'
    }
},
{timestamps:true}
)

const TicketManagement = mongoose.model('TicketManagement', TicketManagementSchema);

export default TicketManagement
