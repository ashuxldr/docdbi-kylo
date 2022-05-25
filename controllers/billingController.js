import Billing from "../models/BillingModel";

const createBill = async(req,res)=>{
    console.log(req.body)
    const bill = await Billing.create(req.body);
    res.status(200).json({
        data:bill
    })
}


const getAllBills = async(req,res)=>{
    const bill = await Billing.find({user:req.params.id});
    res.status(200).json({
        data:bill,
        message:"ALL BILLS FETCHED SUCCESSFULLY!"
    })
}

export {createBill, getAllBills};