const express = require('express');
const router = express.Router();
const Todo = require('../../models/Todo');

router.get('/', (req, res) => {
    Todo.find({})
        .then(todos => res.json(todos))
        .catch(err => res.status(400).json({err}));
});

router.post('/', (req, res) => {
    const newTodo = {
        title: req.body.title,
        body: req.body.body
    }
    newTodo.save()
        .then(todo => res.json(todo))
        .catch(err => res.status(500).json({err}));
});

router.delete('/:id', (req, res) => {
    Todo.findById(req.params.id)
        .then(todo => res.status(200).json({todo: true}))
        .catch(err => res.status(500).json({err: false}));
});

module.exports = router;
