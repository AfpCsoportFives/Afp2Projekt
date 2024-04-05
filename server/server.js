const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    console.log("Server is running")
    res.end("Server is running")
})



app.listen(5000,()=>{
    console.log("listening..");
})

