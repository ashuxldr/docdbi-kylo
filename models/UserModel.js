import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    userType:{
        type:String,
        enum:['free', 'premium', 'personalised']
    },
    premiumType:{
        subscription: {type: mongoose.Schema.Types.ObjectId, ref:'Subscription' },
        billingCycle: {type: String, default:'monthly'}
        // billingCycle: {type: mongoose.Schema.Types.ObjectId, ref:'Billing'}
    },
    peronalisedType:{
        subscription:{type: mongoose.Schema.Types.ObjectId, ref:'Personalised' },
        // billingCycle: {type: mongoose.Schema.Types.ObjectId, ref:'Billing'}
        billingCycle: {type: String, default:'monthly'},
        team_members: [{type: mongoose.Schema.Types.ObjectId, ref:'User' }]
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    company:{
        type:String,
    },
    status:{
        type:String,
        default:'active',
        enum:['active','deactivated', 'blocked', 'awaiting_verification']
    },
    role:{
        type:String,
        default:'user',
        enum:['admin','user']
    },
    block:{
        type:Boolean,
        default:false
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
},
{timestamps:true}
)

UserSchema.pre('save', async function (next) {
    // Only run this function if password is modified
    if (!this.isModified('password')) return next();
  
    // Hash the password with a cost of 12
    this.password = await bcrypt.hash(this.password, 10);
    next();
});
  
  UserSchema.pre('save', async function (next) {
    if (!this.isModified('password') || this.isNew) return next();
    // this.passwordChangedAt = Date.now() - 1000; // subtracting 1 sec to counter the time between issuing jwt and document saving time
    next();
  });



const User = mongoose.model('User', UserSchema);

export default User