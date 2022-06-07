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
		doc.email = 'doc'+doc.email;
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


// 1MILLION DATA

const filterGender = async (req, res) => {
	const {page,query} = req.body;
	console.log(req.body)
	Leads.find(query).skip((page-1)*100).limit(100)
	// Leads.find(query).skip((page-1)*50).limit(50)
		.then(function (leads) {
			return res.json({
				status: '200',
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