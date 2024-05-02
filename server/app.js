const EventManager = require('./models/EventManager'); // Vagy './lib/EventManager', ha oda került
const manager = new EventManager();

manager.createEvent("Meeting");
manager.createEvent("Workshop");

manager.updateEvent("Meeting", "Team Meeting");

manager.deleteEvent("Workshop");

manager.listEvents(); // Az összes eseményt kiírja a konzolra
