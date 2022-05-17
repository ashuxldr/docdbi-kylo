import Subscription from "../models/SubscriptionModel.js"


const createSubscription = async (req, res) => {
	const {title, desc, amount, credit, validity_days, no_of_user} = req.body;
	const subscription = await Subscription.findOne({title:title});
	if(subscription) return res.status(400).json("SUBSCRIPTION ALREADY EXISTS!")
	const newSubscription = await Subscription.create(req.body);
	if(newSubscription){
	return res.status(200).json({
		data: newSubscription,
		message: 'SUBSCRIPTION CREATED SUCCESSFULLY',
	});
	}	
	return res.status(500).json({
		message: 'INTERNAL SERVER ERROR!',
	});
};

const updateSubscription = async (req, res) => {
	Subscription.findByIdAndUpdate(req.params.id, req.body, {returnDocument:'after'}, (err,newSubscription)=>{
        if(err){
            return res.status(500).json({
                error:err,
                message: 'INTERNAL SERVER ERROR!',
            });
        }	
        return res.status(200).json({
            data: newSubscription,
            message: 'SUBSCRIPTION CREATED SUCCESSFULLY',
        });
    });
	
};

const getSubscriptionById = async (req, res) => {
    let subscription = await Subscription.findById(req.params.id);
    if(!subscription)
        return res.status(400).json('SUBSCRIPTION NOT FOUND');
    res.status(200).json({
        status: "SUCCESS",
        data: subscription,
        message: 'SUBSCRIPTION FETCHED SUCCESSFULLY',
    });
};
  
const getAllSubscription = async (req, res) => {
    let subscription = await Subscription.find();
    if(!subscription)
    return res.status(400).json('CATEGORY NOT FOUND');
    res.status(200).json({
      status: "SUCCESS",
      data: subscription,
      message: 'ALL SUBSCRIPTIONS FETCHED SUCCESSFULLY',
    });
};
  
const deleteSubscription = async (req, res) => {
    let subscription = await Subscription.findById(req.params.id);
    if(!subscription)
        return res.status(400).json('SUBSCRIPTION NOT FOUND');
    await subscription.delete();
    res.status(200).json({
        status: "SUCCESS",
        data: subscription,
        message: 'SUBSCRIPTION DELETED SUCCESSFULLY',
    });
};

export {createSubscription, updateSubscription, getSubscriptionById, 
            getAllSubscription, deleteSubscription};

