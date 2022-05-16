import express from "express";
const router = express.Router();
import { createCategory, updateCategory
, getCategoryById, getAllCategory, deleteCategory} from "../controllers/categoryContorller.js"

// create new category @Route /api/category/create POST
router.post('/create', createCategory);

// update category @Route /api/category/update/:id PUT
router.put('/update/:id', updateCategory);

// delete category @Route /api/category/create DELETE
router.delete('/delete/:id', deleteCategory);

// get category by id @Route /api/category/:id GET
router.get('/get/:id', getCategoryById);

// get category by id @Route /api/category/all GET
router.get('/getAll', getAllCategory);

export default router;