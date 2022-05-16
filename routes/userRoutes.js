import express from 'express';
const router = express.Router();

import {createFreeUser, createPremiumUser} from '../controllers/userController.js'

router.post('/createFreeUser', createFreeUser);
router.post('/createPremiumUser', createPremiumUser);

export default router;