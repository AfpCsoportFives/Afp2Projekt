const db = require('./db.js'); // Adb.js modul importálása, amely az adatbázis kapcsolatot kezeli

class Event {
    constructor(eventId) {
        this.eventId = eventId;
        this.loadData();
    }

    async loadData() {
        // Lekérdezzük az esemény adatait az adatbázisból
        const [rows] = await db.query('SELECT * FROM events WHERE id = ?', [this.eventId]);
        this.data = rows[0] || null; // Feltételezzük, hogy egyedi azonosítók vannak
    }

    async createEvent(name, date, description, userId) {
        // Új esemény beszúrása az adatbázisba
        const [result] = await db.query(
            'INSERT INTO events (name, date, description, user_id) VALUES (?, ?, ?, ?)',
            [name, date, description, userId]
        );
        return { success: result.affectedRows > 0, eventID: result.insertId };
    }

    async deleteEvent(eventId) {
        // Esemény törlése az adatbázisból
        const [result] = await db.query('DELETE FROM events WHERE id = ?', [eventId]);
        return { success: result.affectedRows > 0 };
    }

    async updateEvent(eventId, name, date, description) {
        // Esemény frissítése az adatbázisban
        const [result] = await db.query(
            'UPDATE events SET name = ?, date = ?, description = ? WHERE id = ?',
            [name, date, description, eventId]
        );
        return { success: result.changedRows > 0 };
    }

    async getAllEvent() {
        // Összes esemény lekérdezése az adatbázisból
        const [rows] = await pool.query('SELECT * FROM events');
        return { success: true, response: rows };
    }
}

module.exports = Event;
