const User = require('../classes/user.js');
const db = require('../classes/db.js');

jest.mock('../classes/db.js', () => {
    return {
        query: jest.fn()
    };
});

describe('User osztály tesztelése', () => {
    let dbQueryMock = db.query;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('getAllUser metódus sikeres lekérdezése', async () => {
        const mockResult = [
            { FelhasznalokId: 1, Email: 'user1@example.com' },
            { FelhasznalokId: 2, Email: 'user2@example.com' }
        ];
        dbQueryMock.mockResolvedValue(mockResult);

        const result = await User.getAllUser();

        expect(dbQueryMock).toHaveBeenCalledWith('SELECT * FROM felhasznalok');
        expect(result).toEqual({ success: true, response: mockResult });
    });

    it('getAllUserById metódus sikeres lekérdezése', async () => {
        const mockResult = { FelhasznalokId: 1, Email: 'user1@example.com' };
        dbQueryMock.mockResolvedValue([mockResult]);

        const result = await User.getAllUserById(1);

        expect(dbQueryMock).toHaveBeenCalledWith('SELECT * FROM felhasznalok WHERE felhasznalokId = ?', [1]);
        expect(result).toEqual({ success: true, response: mockResult });
    });

    it('updateUser metódus sikeres frissítése', async () => {
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
        dbQueryMock.mockResolvedValue({ changedRows: 1 });

        const result = await User.updateUser(userData);

        expect(dbQueryMock).toHaveBeenCalledWith(
            'UPDATE felhasznalok SET Vezeteknev = ?, Keresztnev = ?, FelhasznaloNev = ?, Jelszo = ?, Email = ?, SzuletesiDatum = ?, Neme = ?, Iranyitoszam = ?, Varos = ?, UtcaHazszam = ?, Foglalkozasa = ?, IskolaiVegzettsege = ?, FelhasznaloStatusza = ? WHERE FelhasznalokId LIKE ?',
            [userData.Vezeteknev, userData.Keresztnev, userData.FelhasznaloNev, userData.Jelszo, userData.Email, userData.SzuletesiDatum, userData.Neme, userData.Iranyitoszam, userData.Varos, userData.UtcaHazszam, userData.Foglalkozasa, userData.IskolaiVegzettsege, userData.FelhasznaloStatusza, userData.felhasznalokId]
        );
        expect(result).toEqual({ success: true });
    });

    it('deleteUser metódus sikeres törlése', async () => {
        dbQueryMock.mockResolvedValue({ affectedRows: 1 });

        const result = await User.deleteUser(1);

        expect(dbQueryMock).toHaveBeenCalledWith('DELETE FROM felhasznalok WHERE FelhasznalokId = ?', [1]);
        expect(result).toEqual({ success: true });
    });
});
