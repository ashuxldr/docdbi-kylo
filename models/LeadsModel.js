import mongoose from "mongoose";

const LeadsSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    title:{
        type:String,
    },
    email:{
        type:String,
        trim:true,
        unique:true
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
        type:String,
    },
    ZIP_code:{
        type:String,
    },
    fax:{
        type:String,
    },
    NPI_number:{
        type:Number,
    }
},
{timestamps:true}
)

LeadsSchema.index({gender:1, credentials:1, category:1, city:1, state:1, country:1})

const Leads = mongoose.model('Leads', LeadsSchema);

export default Leads