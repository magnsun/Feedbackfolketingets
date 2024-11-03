const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

// Defines the routes for CRUD operations
router.post('/', personController.createPerson);
router.get('/', personController.getPerson);
router.put('/:id', personController.updatePerson);
router.delete('/:id', personController.deletePerson);

// Exports the router so it can be used in app.js
module.exports = router;