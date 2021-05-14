module.exports = app => {
    const cita = require('../controllers/citaController.js');

    app.get('/cita', cita.findAll);

    app.get('/cita/:citaid', cita.findOne);

    app.post('/cita', cita.create);

    app.put('/cita/:citaid', cita.update);

    app.delete('/cita/:citaid', cita.removeOne);

    app.delete('/cita', cita.removeAll);
}