const User = require('../classes/user.js');
const Database = require('../classes/db.js');

jest.mock('../classes/db.js');

describe('User osztály tesztelése', () => {
    let dbQueryMock;

    beforeAll(() => {
        dbQueryMock = jest.spyOn(Database.prototype, 'query');
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

    it('User.register metódus sikeres regisztráció', async () => {
        const userData = {
            Vezeteknev: 'Test',
            Keresztnev: 'User',
            FelhasznaloNev: 'testuser',
            Jelszo: 'password',
            Email: 'test@example.com',
            SzuletesiDatum: '2000-01-01',
            Neme: 'Férfi',
            Iranyitoszam: '1234',
            Varos: 'Test City',
            UtcaHazszam: 'Test Street 1',
            Foglalkozasa: 'Test Job',
            IskolaiVegzettsege: 'Test Education',
            FelhasznaloStatusza: 'active'
        };

        dbQueryMock.mockResolvedValueOnce({ affectedRows: 1 });

        const user = new User();
        const res = await user.register(userData);

        expect(dbQueryMock).toHaveBeenCalledWith(
            'INSERT INTO felhasznalok (Vezeteknev, Keresztnev, FelhasznaloNev , Jelszo,Email,SzuletesiDatum,Neme,Iranyitoszam,Varos,UtcaHazszam,Foglalkozasa,IskolaiVegzettsege,FelhasznaloStatusza ) VALUES (?, ?, ?, ?,?,?,?,?,?,?,?,?,?)',
            [
                userData.Vezeteknev, userData.Keresztnev, userData.FelhasznaloNev, userData.Jelszo, userData.Email,
                userData.SzuletesiDatum, userData.Neme, userData.Iranyitoszam, userData.Varos, userData.UtcaHazszam,
                userData.Foglalkozasa, userData.IskolaiVegzettsege, userData.FelhasznaloStatusza
            ]
        );
        expect(res).toEqual({ success: true, response: 'new-user-cookie' });
    });

    it('User.register metódus sikertelen regisztráció', async () => {
        const userData = {
            Vezeteknev: 'Test',
            Keresztnev: 'User',
            FelhasznaloNev: 'testuser',
            Jelszo: 'password',
            Email: 'test@example.com',
            SzuletesiDatum: '2000-01-01',
            Neme: 'Férfi',
            Iranyitoszam: '1234',
            Varos: 'Test City',
            UtcaHazszam: 'Test Street 1',
            Foglalkozasa: 'Test Job',
            IskolaiVegzettsege: 'Test Education',
            FelhasznaloStatusza: 'active'
        };

        dbQueryMock.mockResolvedValueOnce({ affectedRows: 0 });

        const user = new User();
        const res = await user.register(userData);

        expect(dbQueryMock).toHaveBeenCalledWith(
            'INSERT INTO felhasznalok (Vezeteknev, Keresztnev, FelhasznaloNev , Jelszo,Email,SzuletesiDatum,Neme,Iranyitoszam,Varos,UtcaHazszam,Foglalkozasa,IskolaiVegzettsege,FelhasznaloStatusza ) VALUES (?, ?, ?, ?,?,?,?,?,?,?,?,?,?)',
            [
                userData.Vezeteknev, userData.Keresztnev, userData.FelhasznaloNev, userData.Jelszo, userData.Email,
                userData.SzuletesiDatum, userData.Neme, userData.Iranyitoszam, userData.Varos, userData.UtcaHazszam,
                userData.Foglalkozasa, userData.IskolaiVegzettsege, userData.FelhasznaloStatusza
            ]
        );
        expect(res).toEqual({ success: false });
    });

    it('User.login metódus sikeres bejelentkezés', async () => {
        dbQueryMock.mockResolvedValueOnce([{ Email: 'test@example.com' }]);

        const user = new User();
        const res = await user.login('test@example.com', 'password');

        expect(dbQueryMock).toHaveBeenCalledWith(
            'SELECT * FROM felhasznalok WHERE Email = ? AND Jelszo = ?',
            ['test@example.com', 'password']
        );
        expect(res).toEqual({ success: true, response: 'generated-cookie' });
    });

    it('User.login metódus sikertelen bejelentkezés', async () => {
        dbQueryMock.mockResolvedValueOnce([]);

        const user = new User();
        const res = await user.login('test@example.com', 'wrongpassword');

        expect(dbQueryMock).toHaveBeenCalledWith(
            'SELECT * FROM felhasznalok WHERE Email = ? AND Jelszo = ?',
            ['test@example.com', 'wrongpassword']
        );
        expect(res).toEqual({ success: false });
    });

    it('User.updateUserData metódus sikeres adatfrissítés', async () => {
        dbQueryMock.mockResolvedValueOnce({ affectedRows: 1 });

        const user = new User();
        user.userId = 1;
        const res = await user.updateUserData({ Email: 'new@example.com', Vezeteknev: 'New', Keresztnev: 'Name' });

        expect(dbQueryMock).toHaveBeenCalledWith(
            'UPDATE felhasznalok SET Email = ?, Vezeteknev = ?, Keresztnev = ? WHERE FelhasznalokId = ?',
            ['new@example.com', 'New', 'Name', 1]
        );
        expect(res).toEqual({ success: true });
    });

    it('User.updateUserData metódus sikertelen adatfrissítés', async () => {
        dbQueryMock.mockResolvedValueOnce({ affectedRows: 0 });

        const user = new User();
        user.userId = 1;
        const res = await user.updateUserData({ Email: 'new@example.com', Vezeteknev: 'New', Keresztnev: 'Name' });

        expect(dbQueryMock).toHaveBeenCalledWith(
            'UPDATE felhasznalok SET Email = ?, Vezeteknev = ?, Keresztnev = ? WHERE FelhasznalokId = ?',
            ['new@example.com', 'New', 'Name', 1]
        );
        expect(res).toEqual({ success: false });
    });

    it('User.logout metódus sikeres kijelentkezés', async () => {
        dbQueryMock.mockResolvedValueOnce({ affectedRows: 1 });

        const user = new User();
        user.cookie = 'test-cookie';
        const res = await user.logout();

        expect(dbQueryMock).toHaveBeenCalledWith(
            'UPDATE felhasznalok SET Cookie = NULL WHERE Cookie = ?',
            ['test-cookie']
        );
        expect(res).toEqual({ success: true });
    });

    it('User.logout metódus sikertelen kijelentkezés', async () => {
        dbQueryMock.mockResolvedValueOnce({ affectedRows: 0 });

        const user = new User();
        user.cookie = 'test-cookie';
        const res = await user.logout();

        expect(dbQueryMock).toHaveBeenCalledWith(
            'UPDATE felhasznalok SET Cookie = NULL WHERE Cookie = ?',
            ['test-cookie']
        );
        expect(res).toEqual({ success: false });
    });

    it('User.applyToEvent metódus sikeres jelentkezés eseményre', async () => {
        dbQueryMock.mockResolvedValueOnce({ affectedRows: 1 });

        const user = new User();
        user.userId = 1;
        const res = await user.applyToEvent(1);

        expect(dbQueryMock).toHaveBeenCalledWith(
            'INSERT INTO foglalasok (FelhasznalokId, RendezvenyId) VALUES (?, ?)',
            [1, 1]
        );
        expect(res).toEqual({ success: true });
    });

    it('User.applyToEvent metódus sikertelen jelentkezés eseményre', async () => {
        dbQueryMock.mockResolvedValueOnce({ affectedRows: 0 });

        const user = new User();
        user.userId = 1;
        const res = await user.applyToEvent(1);

        expect(dbQueryMock).toHaveBeenCalledWith(
            'INSERT INTO foglalasok (FelhasznalokId, RendezvenyId) VALUES (?, ?)',
            [1, 1]
        );
        expect(res).toEqual({ success: false });
    });

    it('User.removeApply metódus sikeres jelentkezés eltávolítása', async () => {
        dbQueryMock.mockResolvedValueOnce({ affectedRows: 1 });

        const user = new User();
        const res = await user.removeApply(1);

        expect(dbQueryMock).toHaveBeenCalledWith(
            'DELETE FROM foglalasok WHERE FoglalasokId = ?',
            [1]
        );
        expect(res).toEqual({ success: true });
    });

    it('User.removeApply metódus sikertelen jelentkezés eltávolítása', async () => {
        dbQueryMock.mockResolvedValueOnce({ affectedRows: 0 });

        const user = new User();
        const res = await user.removeApply(1);

        expect(dbQueryMock).toHaveBeenCalledWith(
            'DELETE FROM foglalasok WHERE FoglalasokId = ?',
            [1]
        );
        expect(res).toEqual({ success: false });
    });

    it('User.getUserApplies metódus sikeres foglalások lekérdezése', async () => {
        const mockResult = [
            { FoglalasokId: 1, RendezvenyId: 1 },
            { FoglalasokId: 2, RendezvenyId: 2 }
        ];
        dbQueryMock.mockResolvedValueOnce(mockResult);

        const user = new User();
        user.userId = 1;
        const res = await user.getUserApplies();

        expect(dbQueryMock).toHaveBeenCalledWith(
            'SELECT * FROM foglalasok WHERE FelhasznalokId = ?',
            [1]
        );
        expect(res).toEqual({ success: true, response: mockResult });
    });

    it('User.getAllUser metódus sikeres összes felhasználó lekérdezése', async () => {
        const mockResult = [
            { FelhasznalokId: 1, Email: 'test1@example.com' },
            { FelhasznalokId: 2, Email: 'test2@example.com' }
        ];
        dbQueryMock.mockResolvedValueOnce(mockResult);

        const res = await User.getAllUser();

        expect(dbQueryMock).toHaveBeenCalledWith('SELECT * FROM felhasznalok');
        expect(res).toEqual({ success: true, response: mockResult });
    });

    it('User.getAllUserById metódus sikeres felhasználó lekérdezése ID alapján', async () => {
        const mockResult = [{ FelhasznalokId: 1, Email: 'test1@example.com' }];
        dbQueryMock.mockResolvedValueOnce([mockResult]);

        const res = await User.getAllUserById(1);

        expect(dbQueryMock).toHaveBeenCalledWith(
            'SELECT * FROM felhasznalok WHERE felhasznalokId = ?',
            [1]
        );
        expect(res).toEqual({ success: true, response: mockResult });
    });

    it('User.updateUser metódus sikeres felhasználó frissítése', async () => {
        dbQueryMock.mockResolvedValueOnce({ changedRows: 1 });

        const userData = {
            Vezeteknev: 'Updated',
            Keresztnev: 'User',
            FelhasznaloNev: 'updateduser',
            Jelszo: 'newpassword',
            Email: 'updated@example.com',
            SzuletesiDatum: '2000-01-01',
            Neme: 'Férfi',
            Iranyitoszam: '1234',
            Varos: 'Updated City',
            UtcaHazszam: 'Updated Street 1',
            Foglalkozasa: 'Updated Job',
            IskolaiVegzettsege: 'Updated Education',
            FelhasznaloStatusza: 'active',
            felhasznalokId: 1
        };

        const res = await User.updateUser(userData);

        expect(dbQueryMock).toHaveBeenCalledWith(
            'UPDATE felhasznalok SET Vezeteknev = ?, Keresztnev = ?, FelhasznaloNev = ?, Jelszo = ?, Email = ?, SzuletesiDatum = ?, Neme = ?, Iranyitoszam = ?, Varos = ?, UtcaHazszam = ?, Foglalkozasa = ?, IskolaiVegzettsege = ?, FelhasznaloStatusza = ?  WHERE FelhasznalokId LIKE ?',
            [
                userData.Vezeteknev, userData.Keresztnev, userData.FelhasznaloNev, userData.Jelszo, userData.Email,
                userData.SzuletesiDatum, userData.Neme, userData.Iranyitoszam, userData.Varos, userData.UtcaHazszam,
                userData.Foglalkozasa, userData.IskolaiVegzettsege, userData.FelhasznaloStatusza, userData.felhasznalokId
            ]
        );
        expect(res).toEqual({ success: true });
    });

    it('User.updateUser metódus sikertelen felhasználó frissítése', async () => {
        dbQueryMock.mockResolvedValueOnce({ changedRows: 0 });

        const userData = {
            Vezeteknev: 'Updated',
            Keresztnev: 'User',
            FelhasznaloNev: 'updateduser',
            Jelszo: 'newpassword',
            Email: 'updated@example.com',
            SzuletesiDatum: '2000-01-01',
            Neme: 'Férfi',
            Iranyitoszam: '1234',
            Varos: 'Updated City',
            UtcaHazszam: 'Updated Street 1',
            Foglalkozasa: 'Updated Job',
            IskolaiVegzettsege: 'Updated Education',
            FelhasznaloStatusza: 'active',
            felhasznalokId: 1
        };

        const res = await User.updateUser(userData);

        expect(dbQueryMock).toHaveBeenCalledWith(
            'UPDATE felhasznalok SET Vezeteknev = ?, Keresztnev = ?, FelhasznaloNev = ?, Jelszo = ?, Email = ?, SzuletesiDatum = ?, Neme = ?, Iranyitoszam = ?, Varos = ?, UtcaHazszam = ?, Foglalkozasa = ?, IskolaiVegzettsege = ?, FelhasznaloStatusza = ?  WHERE FelhasznalokId LIKE ?',
            [
                userData.Vezeteknev, userData.Keresztnev, userData.FelhasznaloNev, userData.Jelszo, userData.Email,
                userData.SzuletesiDatum, userData.Neme, userData.Iranyitoszam, userData.Varos, userData.UtcaHazszam,
                userData.Foglalkozasa, userData.IskolaiVegzettsege, userData.FelhasznaloStatusza, userData.felhasznalokId
            ]
        );
        expect(res).toEqual({ success: "false" });
    });

    it('User.deleteUser metódus sikeres felhasználó törlése', async () => {
        dbQueryMock.mockResolvedValueOnce({ affectedRows: 1 });

        const res = await User.deleteUser(1);

        expect(dbQueryMock).toHaveBeenCalledWith(
            'DELETE FROM felhasznalok WHERE FelhasznalokId = ?',
            [1]
        );
        expect(res).toEqual({ success: true });
    });

    it('User.deleteUser metódus sikertelen felhasználó törlése', async () => {
        dbQueryMock.mockResolvedValueOnce({ affectedRows: 0 });

        const res = await User.deleteUser(1);

        expect(dbQueryMock).toHaveBeenCalledWith(
            'DELETE FROM felhasznalok WHERE FelhasznalokId = ?',
            [1]
        );
        expect(res).toEqual({ success: "false" });
    });
});
