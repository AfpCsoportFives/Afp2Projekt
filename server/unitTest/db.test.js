
const mysql = require('mysql');
const Database = require('../classes/db.js');

jest.mock('mysql', () => ({
  createConnection: jest.fn().mockReturnThis(),
  query: jest.fn(),
  end: jest.fn()
}));

describe('Database osztály tesztjei', () => {
  let db;

  beforeEach(() => {
    db = new Database();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Konstruktor hívásakor létrejön a kapcsolat', () => {
    expect(mysql.createConnection).toHaveBeenCalledTimes(1);
  });

  test('query metódus sikeres adatlekérdezéskor', async () => {
    const fakeData = [{ id: 1, name: 'Teszt rendezvény' }];
    mysql.query.mockImplementation((sql, args, callback) => callback(null, fakeData));
    const result = await db.query('SELECT * FROM events');
    expect(mysql.query).toHaveBeenCalledWith('SELECT * FROM events', undefined, expect.any(Function));
    expect(result).toEqual(fakeData);
  });

  test('query metódus hibakezelése', async () => {
    const error = new Error('Adatbázis hiba');
    mysql.query.mockImplementation((sql, args, callback) => callback(error, null));
    await expect(db.query('SELECT * FROM events')).rejects.toThrow('Adatbázis hiba');
  });

  test('close metódus sikeres kapcsolatlezárásra', async () => {
    mysql.end.mockImplementation(callback => callback(null));
    await db.close();
    expect(mysql.end).toHaveBeenCalledTimes(1);
  });

  test('close metódus hibakezelése', async () => {
    const error = new Error('Kapcsolat lezárása sikertelen');
    mysql.end.mockImplementation(callback => callback(error));
    await expect(db.close()).rejects.toThrow('Kapcsolat lezárása sikertelen');
  });
});

