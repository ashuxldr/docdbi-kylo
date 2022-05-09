import mongoose from "mongoose";

const LeadsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    website:{
        type:String,
    },
    gender:{
        type:String,
        enum:['M','F','O']
    },
    contact_name:{
        type:String,
    },
    first_name:{
        type:String
    },
    middle_name:{
        type:String
    },
    last_name:{
        type:String
    },
    credentials:{
        type:String
    },
    address:{
        type:String,
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
    county:{
        type:String,
    },
    phone_number:{
        type:Number,
    },
    fax:{
        type:Number,
    },
    NPI_number:{
        type:Number,
    }
},
{timestamps:true}
)

const Leads = mongoose.Model('Leads', LeadsSchema);

export default Leads