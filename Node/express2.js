const express=require('express');

const app=express()
 
app.get("/getData",(req,res) =>{
    console.log("Get data API triggered");
    res.send("API created successfully!");
})
app.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
})