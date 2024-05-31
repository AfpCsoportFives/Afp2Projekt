const Event = require('../classes/event');
const Database = require('../classes/db');

jest.mock('../classes/db'); // Mock-oljuk az adatbázis modult

describe('Event osztály unit tesztek', () => {
    let db;

    beforeEach(() => {
        db = new Database();
        Database.mockClear();
    });

    test('loadData metódus tesztelése', async () => {
        const mockEventData = [{ RendezvenyId: 1, RendezvenyNeve: 'Teszt Esemény' }];
        db.query.mockResolvedValue([mockEventData]);

        const event = new Event(1);
        await event.loadData();

        expect(event.data).toEqual(mockEventData[0]);
    });

    test('createEvent metódus tesztelése', async () => {
        db.query.mockResolvedValue({ insertId: 1, affectedRows: 1 });

        const eventData = {
            RendezvenyNeve: 'Teszt Esemény',
            RendezvenyIdőpontja: '2022-01-01 10:00:00',
            EloadoNeveTitulusa: 'Előadó',
            RendezvenyTemaja: 'Esemény Témája',
            RendezvenyTipusa: 'Típus',
            RendezvenyHelyszine: 'Helyszín',
            RendezvenyLeirasa: 'Leírás',
            SzabadHelyekSzama: 100,
        };

        const result = await Event.createEvent(eventData);
        expect(result).toEqual({ success: true, eventID: 1 });
    });

    test('getEventById metódus tesztelése', async () => {
        const mockEventData = [{ RendezvenyId: 1, RendezvenyNeve: 'Teszt Esemény' }];
        db.query.mockResolvedValue([mockEventData]);

        const result = await Event.getEventById(1);
        expect(result).toEqual(mockEventData);
    });

    test('deleteEvent metódus tesztelése', async () => {
        db.query.mockResolvedValue({ affectedRows: 1 });

        const result = await Event.deleteEvent(1);
        expect(result).toEqual({ success: true });
    });

    test('updateEvent metódus tesztelése', async () => {
        db.query.mockResolvedValue({ changedRows: 1 });

        const eventData = {
            RendezvenyId: 1,
            RendezvenyNeve: 'Frissített Esemény',
            RendezvenyIdőpontja: '2022-01-01 10:00:00',
            EloadoNeveTitulusa: 'Előadó',
            RendezvenyTemaja: 'Esemény Témája',
            RendezvenyTipusa: 'Típus',
            RendezvenyHelyszine: 'Helyszín',
            RendezvenyLeirasa: 'Leírás',
            SzabadHelyekSzama: 100,
        };

        const result = await Event.updateEvent(eventData);
        expect(result).toEqual({ success: true });
    });

    test('getAllEvent metódus tesztelése', async () => {
        const mockEventData = [{ RendezvenyId: 1, RendezvenyNeve: 'Teszt Esemény' }];
        db.query.mockResolvedValue(mockEventData);

        const result = await Event.getAllEvent();
        expect(result).toEqual({ success: true, response: mockEventData });
    });

    test('loadData hibakezelés tesztelése', async () => {
        db.query.mockRejectedValue(new Error('Adatbázis hiba'));

        const event = new Event(1);
        await event.loadData();

        expect(event.data).toBeNull();
    });

    test('createEvent hibakezelés tesztelése', async () => {
        db.query.mockRejectedValue(new Error('Adatbázis hiba'));

        const eventData = {
            RendezvenyNeve: 'Teszt Esemény',
            RendezvenyIdőpontja: '2022-01-01 10:00:00',
            EloadoNeveTitulusa: 'Előadó',
            RendezvenyTemaja: 'Esemény Témája',
            RendezvenyTipusa: 'Típus',
            RendezvenyHelyszine: 'Helyszín',
            RendezvenyLeirasa: 'Leírás',
            SzabadHelyekSzama: 100,
        };

        const result = await Event.createEvent(eventData);
        expect(result).toEqual({ success: false, message: 'Adatbázis hiba: Adatbázis hiba' });
    });

    test('getEventById hibakezelés tesztelése', async () => {
        db.query.mockRejectedValue(new Error('Adatbázis hiba'));

        await expect(Event.getEventById(1)).rejects.toThrow('Adatbázis hiba');
    });

    test('deleteEvent hibakezelés tesztelése', async () => {
        db.query.mockRejectedValue(new Error('Adatbázis hiba'));

        const result = await Event.deleteEvent(1);
        expect(result).toEqual({ success: false });
    });

    test('updateEvent hibakezelés tesztelése', async () => {
        db.query.mockRejectedValue(new Error('Adatbázis hiba'));

        const eventData = {
            RendezvenyId: 1,
            RendezvenyNeve: 'Frissített Esemény',
            RendezvenyIdőpontja: '2022-01-01 10:00:00',
            EloadoNeveTitulusa: 'Előadó',
            RendezvenyTemaja: 'Esemény Témája',
            RendezvenyTipusa: 'Típus',
            RendezvenyHelyszine: 'Helyszín',
            RendezvenyLeirasa: 'Leírás',
            SzabadHelyekSzama: 100,
        };

        const result = await Event.updateEvent(eventData);
        expect(result).toEqual({ success: false });
    });

    test('getAllEvent hibakezelés tesztelése', async () => {
        db.query.mockRejectedValue(new Error('Adatbázis hiba'));

        const result = await Event.getAllEvent();
        expect(result).toEqual({ success: false, response: null });
    });
});
