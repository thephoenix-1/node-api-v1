const express = require("express");

let app = express();

app.use(express.json());

//routes
app.get('/', (req,res)=>{
    res.send('Hello NODE API');
})
app.listen(3000, ()=>{
    console.log('Server running at port 3000');
})