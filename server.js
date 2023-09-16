const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
let errorMiddleWare = require('./middlewares/errorMiddleWare');
const productRoute = require("./routers/productRoute");
const cors = require('cors');
let app = express();

app.use('/api/products',productRoute);
// dotenv.config();
app.use(express.json());
app.use(cors());
 
//routes

app.get('/blog', (req, res) => {
    res.send('Hello Blog, My name is Manu Raj')
})

app.get('/', (req,res)=>{
    // throw new Error('Why are you dumb bakayaro?');
    res.send('Hello NODE API');
})
app.use(errorMiddleWare);
let MONGO_URL = process.env.MONGO_URI;
let PORT = process.env.PORT || 3000;

mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URL)
.then(() => {
    app.listen(PORT, ()=>{
        console.log('Server running at port 3000');
    })
    console.log("Successfully connected to mongodb")
}).catch((error)=>{
    console.log(error.message);
})