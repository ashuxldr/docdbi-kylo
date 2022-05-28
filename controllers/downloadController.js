import Download from "../models/DownloadModel";

const createDownload = async(userId) =>{
    const download = await Download.create({user:userId});
    console.log(download)
    res.status(200).json({
        status:"SUCCESS",
        data:download,
        message:"LEADS DOWNLOADED SUCCESSFULLY"
    })
}

const addLeadsToDownload = async(req,res) =>{
    const leadsId = req.body.leads;
    const download = await Download.findOne({user:req.params.id});
    console.log(download)
    download.downloaded_leads = [...download.downloaded_leads, ...leadsId]
    await download.save(); 
    res.status(200).json({
        status:"SUCCESS",
        data:download,
        message:"LEADS DOWNLOADED SUCCESSFULLY"
    })
}

const getDownloadedLeads = async(req,res) =>{
    const download = await Download.findOne({user:req.params.id});
    console.log(download)
    res.status(200).json({
        status:"SUCCESS",
        data:download,
        message:"DOWNLOADED LEADS FETCHED SUCCESSFULLY"
    })
}

export {addLeadsToDownload, getDownloadedLeads, createDownload}