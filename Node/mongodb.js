const express=require('express');
const cors=require('cors');

const {MongoClient, ObjectId}= require('mongodb');


const app=express()

app.use(cors())
app.use(express.json())

const client=new MongoClient('mongodb://localhost:27017');

client.connect()
.then(()=>{
    const db= client.db("registerdb");
    const FormCollection= db.collection("formdetails");

  app.post("/Data", (req, res) => {
   
      FormCollection.insertOne(req.body);

      res.json({
        message: "Data stored successfully",
        recivedData:req.body 
      });
      console.log("inserted successfully");
  });  
  
  app.get("/getData", (req,res)=>{
    FormCollection.find().toArray()
    .then(data=> res.send(data))
  });

  app.delete("/deleteData/:id", (req, res) =>{
    const id=new ObjectId(req.params.id);
    FormCollection.deleteOne({_id:id});
    res.send("deleted");
    console.log("record deleted successfully!")
  })

  
})


app.listen(5500,()=>{
    console.log("server is running on http://localhost:5500");
})