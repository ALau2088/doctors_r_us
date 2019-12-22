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
    },
    postADoctor: (req, res) => {
      const params = [req.body.firstname, req.body.lastname]
      models.doctors.post(params, (err, results) => {
        if (err) {
          console.log(err)
        }
        res.sendStatus(201);
      })
    },
    deleteADoctor: (req, res) => {
      const params = [req.body.firstname, req.body.lastname]
      models.doctors.delete(params, (err, results) => {
        if (err) {
          return console.error(err.message);
        }
        res.end('Doctor Deleted');
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
      const params = [req.body.name, req.body.phone_number, req.body.doctorId]
      models.patients.post(params, (err, results) => {
        if (err) {
          console.log(err)
        }
        res.sendStatus(201);
      })
    },
    deleteAnAppointment: (req, res) => {
      const params = req.body.appointmentId
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