import express from "express";
import multer from "multer"
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
import { UploadLeadsCSV } from "../controllers/leadsController.js"

router.route('/uploadCustomerCSV').post(upload.single('file'), UploadLeadsCSV);