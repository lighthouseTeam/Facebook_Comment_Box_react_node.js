const express = require('express');
const app = express();
// const router = express.Router();
const connectDB = require('./models/connectDB')
const router= require('./routers/router');

require("dotenv").config();

const port = 5002;
app.use(express.json());
app.use('/', router);

connectDB();

app.listen(port,()=>{
    console.log(`I am listening to ${port}`);
});