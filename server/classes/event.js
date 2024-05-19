const Database = require('./db.js'); 
const db = new Database(); // Példányosítjuk a Database osztályt

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

    static async createEvent(name, date, description, userId) {
        if (!name || !date || !description || !userId) {
            return { success: false, message: 'Minden mező kitöltése kötelező.' };
        }

        try {
            // Új esemény beszúrása az adatbázisba
            const [result] = await db.query(
                'INSERT INTO events (name, date, description, user_id) VALUES (?, ?, ?, ?)',
                [name, date, description, userId]
            );
            // Visszatérési érték, ha a beszúrás sikeres
            return { success: result.affectedRows > 0, eventID: result.insertId };
        } catch (error) {
            // Hibakezelés: ha hiba történik az adatbázis-művelet kezelése során
            return { success: false, message: 'Adatbázis hiba: ' + error.message };
        }
    }

    static async deleteEvent(eventId) {
        // Esemény törlése az adatbázisból
        const [result] = await db.query('DELETE FROM events WHERE id = ?', [eventId]);
        return { success: result.affectedRows > 0 };
    }

    static async updateEvent(eventId, name, date, description) {
        // Esemény frissítése az adatbázisban
        const [result] = await db.query(
            'UPDATE events SET name = ?, date = ?, description = ? WHERE id = ?',
            [name, date, description, eventId]
        );
        return { success: result.changedRows > 0 };
    }

    static async getAllEvent() {
        // Összes esemény lekérdezése az adatbázisból
        const [rows] = await db.query('SELECT * FROM events');
        return { success: true, response: rows };
    }
}

module.exports = Event;
