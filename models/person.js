const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defines the schema for a person
const PersonSchema = new Schema({
    name: { type: String, required: true },
    parti: { type: String, required: true },
    positionen: { type: String, required: true },
    startdato: { type: Date, required: false }
});

// Exports the model so it can people in other files
module.exports = mongoose.model('Person', PersonSchema);