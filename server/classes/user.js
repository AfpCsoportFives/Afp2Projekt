const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fullStackDB'
});

module.exports = {
  query: function(query, params, callback) {
    return pool.query(query, params, callback);
  }
};
const db = require('./db');

login(email, password)
{ 
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  return new Promise((resolve, reject) => {
    db.query(query, [email, password], (err, result) => {
      if (err) reject({ success: false });
      if (result.length > 0) {
        resolve({ success: true, response: 'cookie-placeholder' });
      } else {
        resolve({ success: false });
      }
    });
  });
}

register(userData)
{
  const query = 'INSERT INTO users (email, password, firstName, lastName) VALUES (?, ?, ?, ?)';
  return new Promise((resolve, reject) => {
    db.query(query, [userData.email, userData.password, userData.firstName, userData.lastName], (err, result) => { 
      if (err || result.affectedRows === 0) {
        reject({ success: false });
      } else { 
        resolve({ success: true, response: 'cookie-placeholder' });
      }
    });
  });
}

updateUserData(userData)
{ 
  const query = 'UPDATE users SET email = ?, firstName = ?, lastName = ? WHERE id = ?';
  return new Promise((resolve, reject) => {
    db.query(query, [userData.email, userData.firstName, userData.lastName, this.userId], (err, result) => {
      if (err || result.affectedRows === 0) {
        reject({ success: false });
      } else {
        resolve({ success: true });
      }
    });
  });
}
