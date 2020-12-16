const Info = require('../models/commentsDB');

exports.form = async (req,res)=>{
    const {author, comment} = req.body;
    console.log(req.body);
    const block = new Info({
        author,
        comment,
        });

    await block.save();

    console.log( req.body);
    res.send("it is registered");
}

