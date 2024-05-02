const express = require('express');
const EventManager = require('../models/EventManager'); // Az osztály importálása
const router = express.Router();

const manager = new EventManager();

router.post('/events', (req, res) => {
   const { eventName } = req.body;
   manager.createEvent(eventName);
   res.status(201).send('Event created');
});

router.put('/events', (req, res) => {
   const { oldName, newName } = req.body;
   manager.updateEvent(oldName, newName);
   res.send('Event updated');
});

router.delete('/events', (req, res) => {
   const { eventName } = req.body;
   manager.deleteEvent(eventName);
   res.send('Event deleted');
});

router.get('/events', (req, res) => {
   res.json(manager.events); // Az összes esemény JSON-ként
});

module.exports = router; // Exportálja a routert

