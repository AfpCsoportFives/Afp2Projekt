const EventManager = require('./models/EventManager'); // Vagy './lib/EventManager', ha oda került
const manager = new EventManager();

manager.createEvent("Meeting");
manager.createEvent("Workshop");

manager.updateEvent("Meeting", "Team Meeting");

manager.deleteEvent("Workshop");

manager.listEvents(); // Az összes eseményt kiírja a konzolra

const express = require('express');
const eventsRouter = require('./routes/events'); // Az események útvonalainak importálása

const app = express();

app.use(express.json()); // JSON támogatás a POST és PUT kérésekhez

app.use('/events', eventsRouter); // Az események útvonalainak hozzáadása

app.listen(3000, () => console.log('Server running on port 3000'));

