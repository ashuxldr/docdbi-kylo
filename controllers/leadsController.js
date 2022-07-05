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
	const category = await Category.findById(categoryId);
	
	// csv status
	let JSONArray = await csvtojson().fromString(req.file.buffer.toString());

	// show data count
	JSONArray.map((doc)=>{
		doc.category = category;
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


// 1MILLION DATA

const filterGender = async (req, res) => {
	const {page,query, limits} = req.body;
	console.log(req.body)
	const count = await Leads.countDocuments(query);
	Leads.find(query).skip((page-1)*limits).limit(limits)
		.then(function (leads) {
			return res.json({
				status: '200',
				data:leads,
				count:count,
				message: 'Leads Data fetched Successfully',
			});
		})
		.catch(function (error) {
			console.log(error);
		});
};

// category basis upload

export {UploadLeadsCSV, filterGender};