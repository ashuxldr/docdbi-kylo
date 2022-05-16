import Category from "../models/CategoryModel.js"

 
const createCategory = async (req, res) => {
    const {name,status} = req.body;
    const category = await Category.findOne({name:name});
    if(!name)
    return res.status(400).json('PLEASE PROVIDE CATEGORY NAME');
    if(category)
    return res.status(400).json('Category ALREADY PRESENT IN DATABASE');
  
    const newCategory = await Category.create(req.body);
    await newCategory.save();
    res.status(200).json({
      status: "SUCCESS",
      data: newCategory,
      message: 'CATEGORY CREATED SUCCESSFULLY',
    });
};
  
const updateCategory = async (req, res) => {
    console.log(req.body)
    Category.findByIdAndUpdate(req.params.id, req.body, {returnDocument:'after'}, (err, category)=>{
      if(err)
      return res.status(400).json('CATEGORY NOT FOUND');
      else{
      res.status(200).json({
        status: "SUCCESS",
        data: category,
        message: 'CATEGORY UPDATED SUCCESSFULLY',
        });
      }
    }); 
};
  
const getCategoryById = async (req, res) => {
    let category = await Category.findById(req.params.id);
    if(!category)
        return res.status(400).json('CATEGORY NOT FOUND');
    res.status(200).json({
        status: "SUCCESS",
        data: category,
        message: 'CATEGORY FETCHED SUCCESSFULLY',
    });
};
  
const getAllCategory = async (req, res) => {
    let category = await Category.find();
    if(!category)
    return res.status(400).json('CATEGORY NOT FOUND');
    res.status(200).json({
      status: "SUCCESS",
      data: category,
      message: 'ALL CATEGORY FETCHED SUCCESSFULLY',
    });
};
  
const deleteCategory = async (req, res) => {
    let category = await Category.findById(req.params.id);
    if(!category)
        return res.status(400).json('CATEGORY NOT FOUND');
    await category.delete();
    res.status(200).json({
        status: "SUCCESS",
        data: category,
        message: 'CATEGORY DELETED SUCCESSFULLY',
    });
};

export { createCategory, updateCategory, getCategoryById, getAllCategory, deleteCategory};