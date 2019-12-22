const controller = require('./controllers');
const router = require('express').Router();

router.get('/doctors', controller.doctors.getAllDoctors);

router.get('/appointments', controller.appointments.getAllAppointments);

router.post('/appointments', controller.appointments.postAnAppointment);

router.delete('/appointments', controller.appointments.deleteAnAppointment);

module.exports = router;