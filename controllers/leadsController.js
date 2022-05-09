import Leads from "../models/LeadsModel.js"


module.exports.UploadLeadsCSV = async (req, res) => {
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