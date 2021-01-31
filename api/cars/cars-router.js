const express = require('express');

const db = require('../../data/db-config.js');

const router = require.Router();

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.json(cars)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to retrieve cars.'
            })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db('cars').where({ id }).first()
        .then(car => {
            res.json(car);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to retrieve car by id.'
            })
        })
})

router.post('/', (req, res) => {
    const carData = req.body;
    db('cars').insert(carData)
        .then(ids => {
            db('cars').where({ id: ids[0] })
                .then(newCarEntry => {
                    res.status(201).json(newCarEntry);
                })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to store data.'
            })
        })
})

// as a stretch, try to add the put and delete methods after you get all of the mvp stuff completed.

module.exports = router;