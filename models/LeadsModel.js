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
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    hostpital_identifier:{
        type:Number,
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
LeadsSchema.index({city:1})
LeadsSchema.index({credentials:1})
LeadsSchema.index({ fax:1, NPI_number:1,gender:1, credentials:1, 
    city:1, state:1, country:1, county:1, ZIP_code:1})
LeadsSchema.index({contact_name:1, middle_name:1, 
    first_name:1, last_name:1, gender:1, credentials:1,})
LeadsSchema.index({email:1, website:1,contact_name:1, middle_name:1, fax:1, NPI_number:1,
    first_name:1, last_name:1, gender:1, credentials:1, category:1,
     city:1, state:1, country:1, ZIP_code:1})
     
const Leads = mongoose.model('Leads', LeadsSchema);

export default Leads