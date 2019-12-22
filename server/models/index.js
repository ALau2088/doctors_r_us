const db = require('../db');

module.exports = {
  doctors: {
    get: (callback) => {
      const queryStr = `SELECT * FROM doctors`;
      db.all(queryStr, [], (err, rows) => {
        callback(err, rows)
      });
    }
  },
  appointments: {
    get: (params, callback) => {
      const queryStr = `SELECT * FROM patients WHERE doctor_id = ?`;
      db.all(queryStr, params, (err, rows) => {
        callback(err, rows)
      });
    },
    post: (params, callback) => {
      const queryStr = `INSERT INTO patients(name, phone_number, doctor_id) VALUES(?,?,?)`;
      db.run(queryStr, params, function (err) {
        callback(err, this)
      });
    },
    delete: (params, callback) => {
      const queryStr = `DELETE FROM patients WHERE name = ?`;
      db.run(queryStr, params, err => {
        callback(err, this.changes)
      })
    }
  }
}