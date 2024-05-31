const express = require("express");
const cors = require("cors");
const app = express();

const Event = require('./classes/event.js');
const Event = require('./classes/user.js');

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    console.log("Server is running");
    res.end("Server is running");
});

// Bejelentkezés
app.post("/login", async (req, res) => {
    // Bejelentkezési logika ide
    res.statusCode = 200;
    res.json({ cookie: "", success: true, body: req.body });
});

// Kijelentkezés
app.post("/logout", async (req, res) => {
    // Kijelentkezési logika ide
    res.statusCode = 200;
    res.json({ success: true, body: req.body });
});

// Regisztráció
app.post("/registration", async (req, res) => {
    // Regisztráció
    try {
        const user = new User();
        const regRes=await user.register(req.body);    
        res.json({cookie:regRes.response.cookie,success:regRes.success});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Rendezvények listázása
app.get("/listevents", async (req, res) => {
    try {
        const getAllEventRes = await Event.getAllEvent();
        res.json({ success: getAllEventRes.success, eventList: getAllEventRes.response });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
});

// Egy rendezvény lekérdezése ID alapján
app.get("/listevent/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const event = await Event.getEventById(id);
        res.json({ success: true, event });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
});

// Rendezvény létrehozása
app.post("/createevent", async (req, res) => {
    console.log(req.body);
    try {
        const createEventRes = await Event.createEvent(req.body);
        res.json({ eventId: createEventRes.eventID, success: createEventRes.success });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
});

// Rendezvény frissítése
app.post("/updateEvent", async (req, res) => {
    console.log(req.body);
    try {
        const updateEventRes = await Event.updateEvent(req.body);
        res.json({ success: updateEventRes.success });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
});

// Rendezvény törlése
app.delete("/deleteEvent", async (req, res) => {
    console.log(req.body);
    const { RendezvenyId } = req.body;
    try {
        const deleteEventRes = await Event.deleteEvent(RendezvenyId);
        res.json({ success: deleteEventRes.success });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
});

app.listen(5000, () => {
    console.log("listening on port 5000..");
});