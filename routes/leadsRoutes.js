import express from "express";
import multer from "multer"
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
import { UploadLeadsCSV } from "../controllers/leadsController.js"

// upload csv file to db @Route /api/leads/uploadCustomerCSV
router.post('/uploadCustomerCSV', upload.single('file'), UploadLeadsCSV);

export default router;