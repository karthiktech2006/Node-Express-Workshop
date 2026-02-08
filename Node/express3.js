const express=require('express');

const app=express()
 
app.get("/getData",(req,res) =>{
    console.log("Get data API triggered");
    res.json({
        "name": "karthik",
        "rollno": "23uad041",
        "id":41,
    });
})
app.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
})