import User from "../models/UserModel.js"
import Subscription from "../models/SubscriptionModel.js"
import { nanoid } from 'nanoid'
import Personalised from "../models/PersonalisedModel.js";

const createFreeUser = async (req, res) => {
	console.log(req.body)
	const {name, email, company} = req.body;
	const userType = 'free';
	const user = await User.findOne({email:email});
	const password = nanoid();
	if(user) return res.status(400).json("USER ALREADY EXISTS!")
	const newUser = await User.create({ name, email, company, password, userType});
	if(newUser){
	return res.status(200).json({
		data: newUser,
		password:password, 
		message: 'USER CREATED SUCCESSFULLY',
	});
	}	
	return res.status(500).json({
		message: 'INTERNAL SERVER ERROR!',
	});
};

const createPremiumUser = async (req, res) => {
	const {name, email, company, subscriptionId, billingCycle} = req.body;
	const userType = 'premium';
	const user = await User.findOne({email:email});
	const password = nanoid();

	const subscription = await Subscription.findById(subscriptionId);
	if(!subscription) return res.status(404).json("SUBSCRIPTION NOT FOUND")

	if(user) return res.status(400).json("USER ALREADY EXISTS!")
	const newUser = await User.create({ name, email, company, password, userType,
		premiumType: {subscription:subscription._id, billingCycle}});
	if(newUser){
	return res.status(200).json({
		data: newUser,
		password:password, 
		message: 'USER CREATED SUCCESSFULLY',
	});
	}	
	return res.status(500).json({
		message: 'INTERNAL SERVER ERROR!',
	});
};


const createPersonalisedUser = async (req, res) => {
	const {name, email, company, subscriptionId, billingCycle, credits, cost, team} = req.body;
	const userType = 'personalised';
	const user = await User.findOne({email:email});
	const password = nanoid();

	const subscription = await Personalised.create({title,desc,amount, credits, cost, team});
	if(!subscription) return res.status(404).json("SUBSCRIPTION NOT FOUND")

	if(user) return res.status(400).json("USER ALREADY EXISTS!")
	const newUser = await User.create({ name, email, company, password, userType,
		personalisedType: {subscription:subscription._id, billingCycle}});
	if(newUser){
	return res.status(200).json({
		data: newUser,
		password:password, 
		message: 'USER CREATED SUCCESSFULLY',
	});
	}	
	return res.status(500).json({
		message: 'INTERNAL SERVER ERROR!',
	});
};

const getAllUsers = async(req,res)=>{
	const {userType} = req.body;
	const users = await User.find({userType:userType}) 
	return res.status(200).json({
		data: users,
		message: `${userType} USER DATA FETCHED SUCCESSFULLY`,
	});
}


export {createFreeUser, createPremiumUser, createPersonalisedUser, getAllUsers};