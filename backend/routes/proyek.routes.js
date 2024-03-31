const express = require('express');
const router = express.Router();
const proyekController = require('../controller/proyek.controller');

// Routes
router.get('/proyek', proyekController.getProyek);
router.post('/proyek', proyekController.createProyek);
router.put('/proyek/:proyekId', proyekController.updateProyek);
router.delete('/proyek/:proyekId', proyekController.deleteProyek);

module.exports = router;