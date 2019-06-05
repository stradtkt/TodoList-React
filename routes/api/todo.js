const express = require('express');
const router = express.Router();
const Todo = require('../../models/Todo');

router.get('/', (req, res) => {
    Todo.find({})
        .then(todos => res.json(todos))
        .catch(err => res.status(400).json({err}));
});
