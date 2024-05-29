const db = require('./db');

class User {
    constructor(input) {
        this.db = db;
        if (typeof input === 'number') {
            this.userId = input;
        } else {
            this.cookie = input;
            this.validateCookie();
        }
    }

    async validateCookie() {
        // Cookie validálása és felhasználói ID beállítása
        const query = 'SELECT FelhasznalokId FROM felhasznalok WHERE Cookie = ?';
        const result = await this.db.query(query, [this.cookie]);
        if (result.length > 0) {
            this.userId = result[0].FelhasznalokId;
        } else {
            throw new Error('Invalid cookie');
        }
    }

    async login(email, password) {
        const query = 'SELECT * FROM felhasznalok WHERE Email = ? AND Jelszo = ?';
        const result = await this.db.query(query, [email, password]);
        if (result.length > 0) {
            const cookie = 'generated-cookie'; // Ideálisan, itt egy valódi cookie generálás történne
            // Cookie elmentése az adatbázisba
            return { success: true, response: cookie };
        }
        return { success: false };
    }

    async register(userData) {
        const query = 'INSERT INTO felhasznalok (Email, Jelszo, Vezeteknev, Keresztnev) VALUES (?, ?, ?, ?)';
        const result = await this.db.query(query, [userData.Email, userData.Jelszo, userData.Vezeteknev, userData.Keresztnev]);
        if (result.affectedRows > 0) {
            const cookie = 'new-user-cookie'; // Valódi cookie generálás
            // Cookie elmentése az adatbázisba
            return { success: true, response: cookie };
        }
        return { success: false };
    }

    async updateUserData(userData) {
        const query = 'UPDATE felhasznalok SET Email = ?, Vezeteknev = ?, Keresztnev = ? WHERE FelhasznalokId = ?';
        const result = await this.db.query(query, [userData.Email, userData.Vezeteknev, userData.Keresztnev, this.userId]);
        return result.affectedRows > 0 ? { success: true } : { success: false };
    }

    async logout() {
        const query = 'UPDATE felhasznalok SET Cookie = NULL WHERE Cookie = ?';
        const result = await this.db.query(query, [this.cookie]);
        return result.affectedRows > 0 ? { success: true } : { success: false };
    }

    async applyToEvent(eventId) {
        const query = 'INSERT INTO foglalasok (FelhasznalokId, RendezvenyId) VALUES (?, ?)';
        const result = await this.db.query(query, [this.userId, eventId]);
        return result.affectedRows > 0 ? { success: true } : { success: false };
    }

    async removeApply(applyId) {
        const query = 'DELETE FROM foglalasok WHERE FoglalasokId = ?';
        const result = await this.db.query(query, [applyId]);
        return result.affectedRows > 0 ? { success: true } : { success: false };
    }

    async getUserApplies() {
        const query = 'SELECT * FROM foglalasok WHERE FelhasznalokId = ?';
        const result = await this.db.query(query, [this.userId]);
        return { success: true, response: result };
    }
}

module.exports = User;