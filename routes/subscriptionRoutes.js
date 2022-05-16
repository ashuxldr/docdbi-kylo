import express from "express";
const router = express.Router();

import {createSubscription, updateSubscription, getSubscriptionById, 
    getAllSubscription, deleteSubscription} from "../controllers/subscriptionController.js"

router.post('/create', createSubscription);

router.put('/update/:id', updateSubscription);

router.delete('/delete/:id', deleteSubscription);

router.get('/get/:id', getSubscriptionById);

router.get('/getAll', getAllSubscription);


export default router;