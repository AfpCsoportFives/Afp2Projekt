const mysql = require("mysql");

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rendezvenyszervezo'
};

class Database {

    constructor() {
        this.connection = mysql.createConnection(dbConfig);
    }

    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                
                if (err)
                    return reject(err);
                
                console.log(sql)

                resolve(rows);
            });
        });
    }

    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    }
}

module.exports = Database;