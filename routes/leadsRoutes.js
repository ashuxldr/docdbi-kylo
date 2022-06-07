import express from "express";
import multer from "multer"
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
import { UploadLeadsCSV, filterGender} from "../controllers/leadsController.js"

// upload csv file to db @Route /api/leads/uploadCustomerCSV
router.post('/uploadCustomerCSV', upload.single('file'), UploadLeadsCSV);

// fetch data to db @Route /api/leads/filterGender/:query
router.post('/filter_contacts', upload.single('file'), filterGender);

export default router;