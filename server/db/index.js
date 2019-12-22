const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./server/db/doctors.db', err => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the doctors database.');

});

db.run('CREATE TABLE IF NOT EXISTS doctors (id integer NOT NULL PRIMARY KEY, first_name TEXT NOT NULL, last_name TEXT NOT NULL)')

db.run('CREATE TABLE IF NOT EXISTS appointments (id integer NOT NULL PRIMARY KEY, patient_first_name TEXT NOT NULL, patient_last_name TEXT NOT NULL, date TEXT NOT NULL, time TEXT NOT NULL, kind TEXT NOT NULL, doctor_id INTEGER NOT NULL, FOREIGN KEY (doctor_id) REFERENCES doctors (id) ON UPDATE SET NULL ON DELETE SET NULL)')

module.exports = db
