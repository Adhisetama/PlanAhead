const express = require('express');
const router = express.Router();
const jadwalController = require('../controller/jadwal.controller');

// Routes
router.get('/jadwal', jadwalController.getJadwal);
router.post('/jadwal', jadwalController.createJadwal);
router.delete('/jadwal/:jadwalId', jadwalController.deleteJadwal);

module.exports = router;