const app = require('../server.js'); 
const db = require('../classes/db.js');
const User = require('../classes/user.js');
const Event = require('../classes/event.js');


const request = require('supertest');


describe('API tesztek', () => {
    it('GET / vissza kell adnia "A szerver fut" üzenetet', async () => {
        const res = await request(app).get('/');
        expect(res.text).toBe('Server is running');
        expect(res.statusCode).toBe(200);
    });

    it('POST /login vissza kell adnia egy sütit és a sikerességet', async () => {
        const res = await request(app)
            .post('/login')
            .send({ email: 'test@example.com', password: 'password' });
        expect(res.body).toEqual({
            cookie: '',
            success: true,
            body: { email: 'test@example.com', password: 'password' }
        });
        expect(res.statusCode).toBe(200);
    });

    it('POST /logout vissza kell adnia a sikerességet', async () => {
        const res = await request(app)
            .post('/logout')
            .send({ userId: 1 });
        expect(res.body).toEqual({
            success: true,
            body: { userId: 1 }
        });
        expect(res.statusCode).toBe(200);
    });

    it('POST /registration hívnia kell a User.register metódust', async () => {
        const mockRegister = jest.spyOn(User.prototype, 'register').mockResolvedValue({
            response: { cookie: 'mockCookie' },
            success: true
        });
        const res = await request(app)
            .post('/registration')
            .send({ email: 'test@example.com', password: 'password' });
        expect(mockRegister).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password' });
        expect(res.body).toEqual({
            cookie: 'mockCookie',
            success: true
        });
        mockRegister.mockRestore();
    });

    it('GET /listevents vissza kell adnia az eseménylistát', async () => {
        const mockGetAllEvent = jest.spyOn(Event, 'getAllEvent').mockResolvedValue({
            response: [],
            success: true
        });
        const res = await request(app).get('/listevents');
        expect(res.body).toEqual({
            success: true,
            eventList: []
        });
        mockGetAllEvent.mockRestore();
    });

    it('POST /createevent létre kell hoznia egy eseményt', async () => {
        const mockCreateEvent = jest.spyOn(Event, 'createEvent').mockResolvedValue({
            success: true
        });
        const res = await request(app)
            .post('/createevent')
            .send({ name: 'Test Event' });
        expect(mockCreateEvent).toHaveBeenCalledWith({ name: 'Test Event' });
        expect(res.body).toEqual({
            success: true
        });
        mockCreateEvent.mockRestore();
    });

    it('POST /updateEvent frissítenie kell egy eseményt', async () => {
        const mockUpdateEvent = jest.spyOn(Event, 'updateEvent').mockResolvedValue({
            success: true
        });
        const res = await request(app)
            .post('/updateEvent')
            .send({ id: 1, name: 'Updated Event' });
        expect(mockUpdateEvent).toHaveBeenCalledWith({ id: 1, name: 'Updated Event' });
        expect(res.body).toEqual({
            success: true
        });
        mockUpdateEvent.mockRestore();
    });

    it('DELETE /deleteEvent törölnie kell egy eseményt', async () => {
        const mockDeleteEvent = jest.spyOn(Event, 'deleteEvent').mockResolvedValue({
            success: true
        });
        const res = await request(app)
            .delete('/deleteEvent')
            .send({ RendezvenyId: 1 });
        expect(mockDeleteEvent).toHaveBeenCalledWith(1);
        expect(res.body).toEqual({
            success: true
        });
        mockDeleteEvent.mockRestore();
    });
});
