const mysql = require('mysql');

const dbConfig = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fullStackDB'
});

connection.connect((err) => {
    if (err) throw err;
    const query = `SELECT * FROM users WHERE id = ${this.userId}`;
    connection.query(query, (err, result) => {
        if (err) throw err;
        if (result.length === 0) {
            return;
        }

        this.email = result[0].email;
        this.firstName = result[0].firstName;
        this.lastName = result[0].lastName;
    });
    connection.end();
});
  
  module.exports = connection;

class user {
    constructor(userIdOrCookie) {
      if (typeof userIdOrCookie === 'string') {

        this.userId = userIdFromCookie;
      } else {
        this.userId = userIdOrCookie;
      }
      this.loadUserData();
    }
  
    loadUserData() {

      this.email = userData.email;
      this.firstName = userData.firstName;
      this.lastName = userData.lastName;
    }
  
    login(email, password) {

  
      if (loggedIn) {

        return { success: true, response: cookie };
      } else {
        return { success: false };
      }
    }
  
    register(userData) {

      if (registered) {

        return { success: true, response: cookie };
      } else {
        return { success: false };
      }
    }
  
    updateUserData(userData) {

      if (updated) {
        return { success: true };
      } else {
        return { success: false };
      }
    }
  
    logout() {

      if (loggedOut) {

        return { success: true };
      } else {
        return { success: false };
      }
    }
  
    applyToEvent(userId, eventId) {
  
      if (applied) {
        return { success: true };
      } else {
        return { success: false };
      }
    }
  
    removeApply(applyId) {
  
      if (removed) {
        return { success: true };
      } else {
        return { success: false };
      }
    }
  
    getUserApplies() {

      if (appliesLoaded) {
        return { success: true, response: appliesData };
      } else {
        return { success: false };
      }
    }
  }