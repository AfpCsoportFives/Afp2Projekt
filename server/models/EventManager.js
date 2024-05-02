class EventManager {
    constructor() {
       this.events = []; // Tároló az események számára
    }
 
    createEvent(eventName) {
       this.events.push(eventName); // Új esemény hozzáadása
    }
 
    deleteEvent(eventName) {
       this.events = this.events.filter(e => e !== eventName); // Esemény törlése
    }
 
    updateEvent(oldName, newName) {
       this.events = this.events.map(e => (e === oldName ? newName : e)); // Esemény frissítése
    }
 
    listEvents() {
       console.log(this.events); // Az összes esemény listázása
    }
 }
 
 module.exports = EventManager; // Az osztály exportálása
 