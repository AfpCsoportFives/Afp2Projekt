const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    console.log("Server is running")
    res.end("Server is running")
})

//Bejelentkezés
app.post("/login",(req,res)=>{
    
})

//kijelentkezés
app.post("/logout",(req,res)=>{
    
})

//Regisztráció
app.post("/registration",(req,res)=>{
    
})

//Meghívó küldése
app.post("/sendInv",(req,res)=>{
    
})

//Rendezvényekl listázása
app.get("/listEvents",(req,res)=>{
    
})

//Rendezvény létrehozása
app.post("/createEvent",(req,res)=>{
    
})

//Rendezvény frissítése
app.post("/updateEvent",(req,res)=>{
    
})
//Rendezvény törlése
app.delete("/deleteEvent",(req,res)=>{
    
})



app.listen(5000,()=>{
    console.log("listening..");
})

