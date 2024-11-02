const Person = require('../models/person');

// Creates a new Person
exports.createPerson = async (req, res) => {
    try {
        const newPerson = new Person(req.body);
        const person = await newPerson.save();
        return res.status(200).send(person);
    } catch (err) {
        return res.status(500).send(err);
    }
};

// Get all Persons
exports.getPerson = async (req, res) => {
    try {
        const persons = await Person.find({});
        return res.status(200).send(persons);
    } catch (err) {
        return res.status(500).send(err);
    }
};

// Updates a Person
exports.updatePerson = async (req, res) => {
    try {
        const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send(person);
    } catch (err) {
        return res.status(500).send(err);
    }
};

// Deletes a Person
exports.deletePerson = async (req, res) => {
    try {
        await Person.findByIdAndDelete(req.params.id);
        return res.status(200).send({ message: 'Person successfully deleted' });
    } catch (err) {
        return res.status(500).send(err);
    }
};