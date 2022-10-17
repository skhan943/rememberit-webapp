const mongoose = require('mongoose');

const MemorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content_type: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    update_time: {
        type: Date,
        default: Date.now()
    },
    create_date: String,
    notes: String
});

module.exports = Memory = mongoose.model('memory', MemorySchema);