const request = require('supertest');
const express = require("express");
const app = express();

const User = require('../classes/user.js')
const Event = require('../classes/event.js')

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
        const createEventRes=await Event.createEvent(req.body);
        res.json({eventId:createEventRes.eventId,success:createEventRes.success});    
    } catch (error) {
        console.log(error)
    }
})

//Rendezvény frissítése
app.post("/updateEvent",async (req,res)=>{
    console.log(req.body)
    try {
        const createEventRes=await Event.updateEvent(req.body);
        res.json({success:createEventRes.success});    
    } catch (error) {
        console.log(error)
    }
})

//Rendezvény törlése
app.delete("/deleteEvent",async (req,res)=>{
    console.log(req.body)
    const {RendezvenyId}=req.body;
    try {
        const createEventRes=await Event.deleteEvent(RendezvenyId);
        
        res.json({success:createEventRes.success});    
    } catch (error) {
        console.log(error)
    }
})

app.listen(5000,()=>{
    console.log("listening..");
})

describe('API tesztek', () => {
    it('GET / vissza kell adnia "A szerver fut" üzenetet', async () => {
        const res = await request(app).get('/');
        expect(res.text).toBe('Server is running');
        expect(res.statusCode).toBe(200);
    });

    it('POST /login vissza kell adnia egy sütit és a sikerességet', async () => {
        const res = await request(app)
            .post('/login')
            .send({ email: 'test@example.com', password: 'password' });
        expect(res.body).toEqual({
            cookie: 'asdjkhbashdjkaskdjm',
            success: true,
            body: { email: 'test@example.com', password: 'password' }
        });
        expect(res.statusCode).toBe(200);
    });

    it('POST /logout vissza kell adnia a sikerességet', async () => {
        const res = await request(app)
            .post('/logout')
            .send({ userId: 1 });
        expect(res.body).toEqual({
            success: true,
            body: { userId: 1 }
        });
        expect(res.statusCode).toBe(200);
    });

    it('POST /registration hívnia kell a User.register metódust', async () => {
        const mockRegister = jest.spyOn(User.prototype, 'register').mockResolvedValue({
            response: { cookie: 'mockCookie' },
            success: true
        });
        const res = await request(app)
            .post('/registration')
            .send({ email: 'test@example.com', password: 'password' });
        expect(mockRegister).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password' });
        expect(res.body).toEqual({
            cookie: 'mockCookie',
            success: true
        });
        mockRegister.mockRestore();
    });

    it('GET /listevents vissza kell adnia az eseménylistát', async () => {
        const mockGetAllEvent = jest.spyOn(Event, 'getAllEvent').mockResolvedValue({
            response: [],
            success: true
        });
        const res = await request(app).get('/listevents');
        expect(res.body).toEqual({
            success: true,
            eventList: []
        });
        mockGetAllEvent.mockRestore();
    });

    it('POST /createevent létre kell hoznia egy eseményt', async () => {
        const mockCreateEvent = jest.spyOn(Event, 'createEvent').mockResolvedValue({
            eventId: 1,
            success: true
        });
        const res = await request(app)
            .post('/createevent')
            .send({ name: 'Test Event' });
        expect(mockCreateEvent).toHaveBeenCalledWith({ name: 'Test Event' });
        expect(res.body).toEqual({
            eventId: 1,
            success: true
        });
        mockCreateEvent.mockRestore();
    });

    it('POST /updateEvent frissítenie kell egy eseményt', async () => {
        const mockUpdateEvent = jest.spyOn(Event, 'updateEvent').mockResolvedValue({
            success: true
        });
        const res = await request(app)
            .post('/updateEvent')
            .send({ id: 1, name: 'Updated Event' });
        expect(mockUpdateEvent).toHaveBeenCalledWith({ id: 1, name: 'Updated Event' });
        expect(res.body).toEqual({
            success: true
        });
        mockUpdateEvent.mockRestore();
    });

    it('DELETE /deleteEvent törölnie kell egy eseményt', async () => {
        const mockDeleteEvent = jest.spyOn(Event, 'deleteEvent').mockResolvedValue({
            success: true
        });
        const res = await request(app)
            .delete('/deleteEvent')
            .send({ RendezvenyId: 1 });
        expect(mockDeleteEvent).toHaveBeenCalledWith(1);
        expect(res.body).toEqual({
            success: true
        });
        mockDeleteEvent.mockRestore();
    });
});
