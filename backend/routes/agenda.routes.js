const express = require('express');
const router = express.Router();
const agendaController = require('../controller/agenda.controller');

// Routes
router.get('/agenda', agendaController.getAgenda);
router.post('/agenda', agendaController.createAgenda);
router.put('/agenda/:agendaId', agendaController.updateAgenda);
router.delete('/agenda/:agendaId', agendaController.deleteAgenda);

module.exports = router;