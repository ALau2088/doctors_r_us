const models = require('../models');

module.exports = {
  doctors: {
    getAllDoctors: (req, res) => {
      models.doctors.get((err, results) => {
        if (err) {
          console.log(err)
        }
        res.send(results);
      })
    }
  },
  appointments: {
    getAllAppointments: (req, res) => {
      const params = req.body.doctorId
      models.patients.get(params, (err, results) => {
        if (err) {
          console.log(err)
        }
        res.send(results);
      })
    },
    postAnAppointment: (req, res) => {
      const params = [req.body.name, req.body.phone_number, req.body.doctor_id]
      models.patients.post(params, (err, results) => {
        if (err) {
          console.log(err)
        }
        res.sendStatus(201);
      })
    },
    deleteAnAppointment: (req, res) => {
      const params = req.body.name
      models.patients.delete(params, (err, results) => {
        if (err) {
          return console.error(err.message);
        }
        console.log(results);
        res.end('Patient Deleted');
      })
    }
  }
}