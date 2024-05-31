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
            const result = await db.query(
                'INSERT INTO esemenyek (RendezvenyNeve , RendezvenyIdőpontja , EloadoNeveTitulusa, RendezvenyTemaja,RendezvenyTipusa,RendezvenyHelyszine,RendezvenyLeirasa,SzabadHelyekSzama) VALUES (?, ?, ?, ?,?,?,?,?)',
                [eventData.RendezvenyNeve,eventData.RendezvenyIdőpontja,eventData.EloadoNeveTitulusa,eventData.RendezvenyTemaja,eventData.RendezvenyTipusa,eventData.RendezvenyHelyszine,eventData.RendezvenyLeirasa,eventData.SzabadHelyekSzama]
            );
            // Visszatérési érték, ha a beszúrás sikeres
            return { success: result.affectedRows > 0, eventID: result.insertId };
        } catch (error) {
            // Hibakezelés: ha hiba történik az adatbázis-művelet kezelése során
            return { success: false, message: 'Adatbázis hiba: ' + error.message };
        }
    }

    
    static async getEventById(eventId) {
        try {
            const [event] = await db.query('SELECT * FROM esemenyek WHERE RendezvenyId = ?', [eventId]);
            return event;
        } catch (error) {
            console.log(error);
            throw error;
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

    static async updateEvent(eventData) {
        // Esemény frissítése az adatbázisban
        try {
            const result = await db.query(
                'UPDATE esemenyek SET RendezvenyNeve = ?, RendezvenyIdőpontja = ?, EloadoNeveTitulusa = ?, RendezvenyTemaja = ?, RendezvenyTipusa = ?, RendezvenyHelyszine = ?, RendezvenyLeirasa = ?, SzabadHelyekSzama = ? WHERE RendezvenyId LIKE ?',
                [eventData.RendezvenyNeve,eventData.RendezvenyIdőpontja,eventData.EloadoNeveTitulusa,eventData.RendezvenyTemaja,eventData.RendezvenyTipusa,eventData.RendezvenyHelyszine,eventData.RendezvenyLeirasa,eventData.SzabadHelyekSzama,eventData.RendezvenyId]
            );    
            return { success: (result.changedRows > 0)};
        } catch (error) {
            console.log(error)
            return { success: "false"};
        }
    }

    static async getAllEvent() {
        // Összes esemény lekérdezése az adatbázisból
        const rows = await db.query('SELECT * FROM esemenyek');
        return { success: true, response: rows };
    }
}

module.exports = Event;
