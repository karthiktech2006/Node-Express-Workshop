const express=require('express');

const app=express()
app.use(express.json()) 
app.post("/Data",(req,res) =>{
    console.log(req.body)
    res.json("post data api triggerd")
    console.log("post data API triggered");
 
})
app.listen(5500,()=>{
    console.log("server is running on http://localhost:5500");
})