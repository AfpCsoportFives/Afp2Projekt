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
    if(loginRes.success) res.json({cookie:loginRes.response.cookie,success:loginRes.success});*/
    res.json({cookie:"asdjkhbashdjkaskdjm",success:true});
})

//kijelentkezés
app.post("/logout",async (req,res)=>{
    /*const {userId}=req.body;
    const user = new User(userId);
    const logoutRes=await user.logout();
    if(logoutRes.success) res.json({cookie:logoutRes.response.cookie,success:logoutRes.success});*/
    res.json({success:true})
})

//Regisztráció
app.post("/registration",async (req,res)=>{
    /*const {email,password,firstname,lastname}=req.body;
    const user = new User();
    const regRes=await user.registartion(email,password,firstname,lastname);
    if(regRes.success) res.json({cookie:regRes.response.cookie,success:regRes.success});*/
    res.json({cookie:"asdjkhbashdjkaskdjm",success:true});
})

//Rendezvények listázása
app.get("/listEvents",async (req,res)=>{
    /*const getAllEventRes=await Event.getAllEvent()
    if(getAllEventRes.success) res.json({success:getAllEventRes.success,eventList:getAllEventRes.response});*/
    res.json({success:true,eventList:[
        {id:1,name:"Rendezvény 1",date:"2024.05.04 12:00:00",description:"Rendezvény1 leírás"},
        {id:1,name:"Rendezvény 1",date:"2024.05.04 12:00:00",description:"Rendezvény1 leírás"},
        {id:1,name:"Rendezvény 1",date:"2024.05.04 12:00:00",description:"Rendezvény1 leírás"},
        {id:1,name:"Rendezvény 1",date:"2024.05.04 12:00:00",description:"Rendezvény1 leírás"},
    ]});
})

//Rendezvény létrehozása
app.post("/createEvent",async (req,res)=>{
    /*const {name,date,description,userId}=req.body;
    const createEventRes=await Event.createEvent(name,date,description,userId);
    if(createEventRes.success) res.json({eventId:createEventRes.eventId,success:createEventRes.success});*/
    res.json({eventId:10,success:createEventRes.success});

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

