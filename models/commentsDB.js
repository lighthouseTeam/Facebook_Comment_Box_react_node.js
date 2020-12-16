const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema({

    author:
    {
        type:String,
        required:true
    },
    comment:
    {
        type:String,
        required:true
    },
    registeredAt: {
        type: Date,
        default: Date.now,
      },
    updatedAt:{
        type: Date,
        default: Date.now,
      },
})

module.exports = Info = mongoose.model('comment', CommentSchema)