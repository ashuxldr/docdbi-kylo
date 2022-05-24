import Wallet from "../models/WalletModel";
import User from "../models/UserModel";


const createWallet = async(userId, credit)=>{
    const wallet = await Wallet.create({user:userId, credit:credit})
    return (wallet._id);
}

const addCredits = async (userId, credit) => {
    const wallet = await Wallet.findOne({user:userId})
    if(!wallet) return res.status(400).json("WALLET NOT FOUND!")
    wallet.credit += credit;
    await wallet.save();
    return wallet.credit;
};


const removeCredits = async (userId, credit) => {
    const wallet = await Wallet.findOne({user:userId})
    if(!wallet) return res.status(400).json("WALLET NOT FOUND!")
    wallet.credit -= credit;
    await wallet.save();
    return wallet.credit;
};


export { createWallet, addCredits, removeCredits }