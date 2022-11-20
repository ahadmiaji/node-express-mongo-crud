const express = require("express");
const person = require("../models/person");

const router = express.Router();

const Person = require('../models/person');


router.get('/', async (req, res, next) => {
    try {
        const persons = await person.find();

        return res.json({
            success: true,
            statusCode: 200,
            message: "Person list fetch successfully!",
            persons: persons
        });
    } catch (err) {
       return next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const person = await Person.findById(req.params.id);

        return res.json({
            success: true,
            statusCode: 200,
            message: "Person info fetch successfully!",
            person: person
        });

    } catch (err) {
        return next(err);
    }
});

router.post('/', async (req, res) => {
    // const person = new Person({
    //     name : req.body.name,
    //     age: req.body.age
    // })
    try {
        // const p1 = await person.save();
        const p1 = await Person.create(req.body);
        res.json(p1);
    } catch (err) {
        res.send(err);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);
        person.name = req.body.name;
        person.age = req.body.age;
        const p1 = await person.save();
        res.json(p1);

    } catch (err) {
        res.send(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const person = await Person.findByIdAndDelete(req.params.id);

        res.json("deleted");

    } catch (err) {
        res.send(err);
    }
});

module.exports = router;