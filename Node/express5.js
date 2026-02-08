const express=require('express');
const cors=require('cors');

const app=express()

app.use(cors())
app.use(express.json())

app.post("/Data",(req,res) =>{
    console.log(req.body)
    res.json({
        message: "data recived successfully!",
        recivedData:req.body
    })
    console.log("post data API triggered");
 
}) 

app.listen(5500,()=>{
    console.log("server is running on http://localhost:5500");
})