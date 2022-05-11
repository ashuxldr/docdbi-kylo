import Leads from "../models/LeadsModel.js"
import csvtojson from "csvtojson"

const UploadLeadsCSV = async (req, res) => {
	const file = req.file;
	if (!file) {
		return res.json({ status: '200', message: 'File is required' });
	}
	const JSONArray = await csvtojson().fromString(req.file.buffer.toString());

	await Leads.insertMany(JSONArray)
		.then(function () {
			return res.json({
				status: '200',
				message: 'Leads Data Uploaded Successfully',
			});
		})
		.catch(function (error) {
			console.log(error);
		});
};

const filterGender = async (req, res) => {
	const {page,query} = req.body;
	const documentLimit = page*50;
	const skipLimit = documentLimit - 50;
	await Leads.find(query).skip(skipLimit).limit(documentLimit).sort({created_at:-1})
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


export {UploadLeadsCSV, filterGender};