const Database = require('./db.js'); 
const db = new Database(); // Példányosítjuk a Database osztályt

class Event {
    constructor(eventId) {
        this.eventId = eventId;
        this.loadData();
    }

    async loadData() {
        // Lekérdezzük az esemény adatait az adatbázisból
        const [rows] = await db.query('SELECT * FROM esemenyek WHERE RendezvenyId = ?', [this.eventId]);
        this.data = rows[0] || null; // Feltételezzük, hogy egyedi azonosítók vannak
    }

    static async createEvent(eventData) {
        /*if (!name || !date || !description || !userId) {
            return { success: false, message: 'Minden mező kitöltése kötelező.' };
        }*/

        try {
            // Új esemény beszúrása az adatbázisba
            const [result] = await db.query(
                'INSERT INTO esemenyek (RendezvenyNeve , RendeznenyIdőpontja , EloadoNeveTitulusa, RendezvenyTemaja,RendezvenyTipusa,RendezvenyHelyszine,RendezvenyLeirasa,SzabadHelyekSzama) VALUES (?, ?, ?, ?,?,?,?,?)',
                [eventData.RendezvenyNeve,eventData.RendeznenyIdopontja,eventData.EloadoNeveTitulusa,eventData.RendezvenyTemaja,eventData.RendezvenyTipusa,eventData.RendezvenyHelyszine,eventData.RendezvenyLeirasa,eventData.SzabadHelyekSzama]
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
        try {
            const result = await db.query('DELETE FROM esemenyek WHERE RendezvenyId = ?', [eventId]);
            return { success: result.affectedRows > 0 };    
        } catch (error) {
            console.log(error)
            return { success: "false"};
            
        }
        
    }

    static async updateEvent(eventId, name, date, description) {
        // Esemény frissítése az adatbázisban
        const [result] = await db.query(
            'UPDATE esemenyek SET RendezvenyNeve = ?, RendezvenyIdőpontja = ?, RendezvenyLeirasa = ? WHERE RendezvenyId = ?',
            [name, date, description, eventId]
        );
        return { success: result.changedRows > 0 };
    }

    static async getAllEvent() {
        // Összes esemény lekérdezése az adatbázisból
        const [rows] = await db.query('SELECT * FROM esemenyek');
        return { success: true, response: rows };
    }
}

module.exports = Event;
