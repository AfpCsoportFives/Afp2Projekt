const express = require("express");
const app = express();

const User = require('./classes/user.js')
const Event = require('./classes/event.js')

app.use(express.json());

app.get("/",(req,res)=>{
    console.log("Server is running")
    res.end("Server is running")
})

//Bejelentkezés
app.post("/login",async (req,res)=>{
    /*const {email, password}=req.body;
    const user = new User();
    const loginRes=await user.login(email,password);
    if(loginRes.success) res.json(loginRes.response);*/
    res.json({cookie:"asdjkhbashdjkaskdjm",logintSuccess:true});
})

//kijelentkezés
app.post("/logout",async (req,res)=>{
    /*const {userId}=req.body;
    const user = new User(userId);
    const logoutRes=await user.logout();
    if(logoutRes.success) res.json(logoutRes.response)*/
    res.json({logoutSuccess:true})
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

