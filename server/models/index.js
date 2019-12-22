const db = require('../db');

module.exports = {
  doctors: {
    get: (callback) => {
      const queryStr = `SELECT * FROM doctors`;
      db.all(queryStr, [], (err, rows) => {
        callback(err, rows)
      });
    },
    post: (params, callback) => {
      const queryStr = `INSERT INTO doctors(first_name, last_name) VALUES(?,?)`;
      db.run(queryStr, params, function (err) {
        callback(err, this)
      });
    },
    delete: (params, callback) => {
      const queryStr = `DELETE FROM doctors WHERE first_name = ? AND last_name = ?`;
      db.run(queryStr, params, err => {
        callback(err, this.changes)
      })
    }
  },
  appointments: {
    get: (params, callback) => {
      const queryStr = `SELECT * FROM appointments WHERE doctor_id = ? AND date = ?`;
      db.all(queryStr, params, (err, rows) => {
        callback(err, rows)
      });
    },
    post: (params, callback) => {
      const queryStr = `INSERT INTO appointments(patient_first_name, patient_last_name, date, time, kind, doctor_id) VALUES(?,?,?,?,?,?)`;
      db.run(queryStr, params, function (err) {
        callback(err, this)
      });
    },
    delete: (params, callback) => {
      const queryStr = `DELETE FROM appointments WHERE id = ?`;
      db.run(queryStr, params, err => {
        callback(err, this.changes)
      })
    }
  }
}