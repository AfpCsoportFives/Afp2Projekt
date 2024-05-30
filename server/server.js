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
    res.statusCode=200;
    res.json({cookie:"asdjkhbashdjkaskdjm",success:true,body:req.body});
})

//kijelentkezés
app.post("/logout",async (req,res)=>{
    /*const {userId}=req.body;
    const user = new User(userId);
    const logoutRes=await user.logout();
    if(logoutRes.success) res.json({cookie:logoutRes.response.cookie,success:logoutRes.success});*/
    res.statusCode=200;
    res.json({success:true,body:req.body})
})

//Regisztráció
app.post("/registration",async (req,res)=>{
    const user = new User();
    const regRes=await user.register(req.body);
    res.json({cookie:regRes.response.cookie,success:regRes.success});
    /*console.log(req.body);
    res.statusCode=200;
    res.json({cookie:"asdjkhbashdjkaskdjm",success:true,body:req.body});*/
})

//Rendezvények listázása
app.get("/listevents",async (req,res)=>{
    const getAllEventRes=await Event.getAllEvent()
    res.json({success:getAllEventRes.success,eventList:getAllEventRes.response});
})

//Rendezvény létrehozása
app.post("/createevent",async (req,res)=>{
    console.log(req.body)
    try {
        const {name,date,description,userId}=req.body;
        const createEventRes=await Event.createEvent(name,date,description,userId);
        if(createEventRes.success) res.json({eventId:createEventRes.eventId,success:createEventRes.success});    
    } catch (error) {
        console.log(error)
    }
    

})

//Rendezvény frissítése
app.post("/updateEvent",(req,res)=>{
    res.json({success:true,body:req.body});
})
//Rendezvény törlése
app.delete("/deleteEvent",(req,res)=>{
    res.json({success:true,body:req.body});
})



app.listen(5000,()=>{
    console.log("listening..");
})