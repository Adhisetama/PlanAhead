const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

// Routes
router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);
router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;