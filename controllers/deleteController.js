
const Info = require('../models/commentsDB');

exports.delete = async (req,res)=>{

    const id = req.params.id;
    console.log(id);

    Info.deleteOne({ _id: id }, 
    
    function (err) {
    if (err) return handleError(err);
    
    res.send('deleted');
});
}
