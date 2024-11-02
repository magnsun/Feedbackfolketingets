const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

// Defines the routes for CRUD operations
router.post('/users', personController.createPerson);
router.get('/users', personController.getPerson);
router.put('/users/:id', personController.updatePerson);
router.delete('/users/:id', personController.deletePerson);

// Exports the router so it can be used in app.js
module.exports = router;