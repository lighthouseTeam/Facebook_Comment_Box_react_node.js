
const Info = require('../models/commentsDB');

exports.delete = async (req,res)=>{

    const id = req.params.id;
    console.log(id);

    Info.updateOne({ _id: id }, 
    { author: 'mehmet photo' },
    function (err) {
    if (err) return handleError(err);
    
    res.send('updated');
});
}

