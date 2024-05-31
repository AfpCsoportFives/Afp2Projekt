// Importing necessary modules
const User = require('../classes/user');
const db = require('../classes/db');

// Mocking the db module with jest.fn() for more control
jest.mock('../classes/db', () => ({
  query: jest.fn()
}));

// Describing the test suite for the User class
describe('User class unit tests', () => {
    let user;

    // Resetting mocks and setting up a new User instance before each test
    beforeEach(() => {
        user = new User();
        db.query.mockClear();
        // Setting a default implementation which can be overridden in specific tests
        db.query.mockImplementation(() => Promise.resolve([]));
    });

    // Testing the validateCookie function for a valid cookie
    it('validateCookie should set userId if cookie is valid', async () => {
        const validUserId = 1;
        db.query.mockResolvedValue([{ FelhasznalokId: validUserId }]);
        user.cookie = 'valid-cookie';
        await user.validateCookie();
        expect(user.userId).toBe(validUserId);
    });

    // Testing the validateCookie function for an invalid cookie
    it('validateCookie should throw an error if cookie is invalid', async () => {
        db.query.mockResolvedValue([]);
        user.cookie = 'invalid-cookie';
        await expect(user.validateCookie()).rejects.toThrow('Invalid cookie');
    });

    // Testing user login for successful authentication
    it('login should authenticate user and return a cookie', async () => {
        db.query.mockResolvedValue([{ FelhasznalokId: 1 }]);
        const result = await user.login('test@example.com', 'password123');
        expect(result).toEqual({ success: true, response: 'generated-cookie' });
    });

    // Testing user login for failed authentication
    it('login should fail to authenticate user with wrong credentials', async () => {
        db.query.mockResolvedValue([]);
        const result = await user.login('test@example.com', 'wrongpassword');
        expect(result).toEqual({ success: false });
    });

    // Testing user registration
    it('register should create a user and return a new cookie', async () => {
        db.query.mockResolvedValue({ affectedRows: 1 });
        const result = await user.register({ email: 'new@example.com', password: 'newpassword123' });
        expect(result).toEqual({ success: true, response: 'new-user-cookie' });
    });

    // Testing user data update
    it('updateUserData should update user information', async () => {
        db.query.mockResolvedValue({ affectedRows: 1 });
        const result = await user.updateUserData({ userId: 1, email: 'update@example.com' });
        expect(result).toEqual({ success: true });
    });

    // Testing user logout
    it('logout should invalidate the user\'s cookie', async () => {
        db.query.mockResolvedValue({ affectedRows: 1 });
        const result = await user.logout();
        expect(result).toEqual({ success: true });
    });

    // Testing event application by user
    it('applyToEvent should create an application for an event', async () => {
        db.query.mockResolvedValue({ affectedRows: 1 });
        const result = await user.applyToEvent(1);
        expect(result).toEqual({ success: true });
    });

    // Testing removal of an application by user
    it('removeApply should delete an application', async () => {
        db.query.mockResolvedValue({ affectedRows: 1 });
        const result = await user.removeApply(1);
        expect(result).toEqual({ success: true });
    });

    // Testing retrieval of all user applications
    it('getUserApplies should return all user applications', async () => {
        db.query.mockResolvedValue([{ applyId: 1 }, { applyId: 2 }]);
        const result = await user.getUserApplies();
        expect(result).toEqual({ success: true, response: [{ applyId: 1 }, { applyId: 2 }] });
    });

    // Testing retrieval of all users
    it('getAllUser should return all users', async () => {
        db.query.mockResolvedValue([{ userId: 1 }, { userId: 2 }]);
        const result = await User.getAllUser();
        expect(result).toEqual({ success: true, response: [{ userId: 1 }, { userId: 2 }] });
    });

    // Testing user update by id
    it('updateUser should update a user by id', async () => {
        db.query.mockResolvedValue({ changedRows: 1 });
        const result = await User.updateUser({ userId: 1, email: 'update@example.com' });
        expect(result).toEqual({ success: true });
    });

    // Testing user deletion by id
    it('deleteUser should remove a user by id', async () => {
        db.query.mockResolvedValue({ affectedRows: 1 });
        const result = await User.deleteUser(1);
        expect(result).toEqual({ success: true });
    });
});
