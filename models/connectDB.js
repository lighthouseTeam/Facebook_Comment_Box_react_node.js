const mongoose = require('mongoose');
const express = require('express');

const connectDB = async () =>{
       try {
            mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true}); 
            console.log('Succesfully connected to DB :)');
        } 
    catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;





// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));