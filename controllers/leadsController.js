import Leads from "../models/LeadsModel.js"
import Category from "../models/CategoryModel.js"
import csvtojson from "csvtojson"


// fileID generate
const UploadLeadsCSV = async (req, res) => {
	const file = req.file;
	const {categoryId} = req.body;
	if (!file) {
		return res.json({ status: '200', message: 'File is required' });
	}
	const category = await Category.findOne({name:"Doctor"});
	
	// csv status
	let JSONArray = await csvtojson().fromString(req.file.buffer.toString());

	// show data count
	JSONArray.map((doc)=>{
		doc.category = category;
		// doc.fileId = fileId
	})
	// api count
	
	try{
		const result = await Leads.insertMany(JSONArray, {ordered:false});
		res.json({
			status: '200',
			count:	result.length, 
			message: 'Leads Data Uploaded Successfully',
		});
	}catch(error) {
		return res.json({
			status: '400',
			insertedCount:error.insertedCount,
			insertedIds: error.insertedIds, 
			message: 'Leads Data Uploaded Successfully But Had Redundant Data!',
		});
	}
};

const filterGender = async (req, res) => {
	const {page,query} = req.body;
	const documentLimit = page*50;
	const skipLimit = (page-1)*50;
	await Leads.find(query).skip(skipLimit).limit(50).sort({created_at:-1})
		.then(function (leads) {
			return res.json({
				status: '200',
				count:leads.length,
				data:leads,
				message: 'Leads Data fetched Successfully',
			});
		})
		.catch(function (error) {
			console.log(error);
		});
};

// category basis upload

export {UploadLeadsCSV, filterGender};