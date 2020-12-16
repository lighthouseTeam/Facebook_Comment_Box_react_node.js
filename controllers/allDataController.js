const Info = require('../models/commentsDB');

exports.allSend = async (req,res)=>{
    const allData = await  Info.find();
    console.log(allData);
    
    res.send(allData);
}