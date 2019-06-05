const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TodoSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    body: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Todo = mongoose.model('todo', TodoSchema);
