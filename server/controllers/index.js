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
      const params = [req.body.doctorId, req.body.date]
      models.appointments.get(params, (err, results) => {
        if (err) {
          console.log(err)
        }
        res.send(results);
      })
    },
    postAnAppointment: (req, res) => {
      // round time to nearest 15min interval
      const time = `${req.body.time.slice(0, 2)}:${Math.round(parseInt(req.body.time.slice(3)) / 15) * 15}`

      // Check if appointment available
      models.appointments.check([req.body.date, time, req.body.doctorId], (err, results) => {
        if (err) {
          console.log(err)
        }
        if (results.length === 3) {
          res.send('Time unavailable')
        }
      })

      const params = [req.body.firstname, req.body.lastname, req.body.date, time, req.body.kind, req.body.doctorId]
      models.appointments.post(params, (err, results) => {
        if (err) {
          console.log(err)
        }
        res.sendStatus(201);
      })
    },
    deleteAnAppointment: (req, res) => {
      const params = req.body.appointmentId
      models.appointments.delete(params, (err, results) => {
        if (err) {
          return console.error(err.message);
        }
        res.end('Appointment Deleted');
      })
    }
  }
}