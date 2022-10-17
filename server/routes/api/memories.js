const express = require('express');
const router = express.Router();

// Load Memory model
const Memory = require('../../models/Memory');

// Route: GET api/memories/test
// Desc: Tests the memories route
// Access: Public
router.get('/test', (req, res) => res.send('Test Route!'));

// Route: GET api/memories
// Desc: Get all memories (depending on filters)
// Access: Public
router.get('/', (req, res) => {
    const queryTitle = req.query.title;
    const queryType = req.query.type;

    if (queryTitle || queryType){
        Memory.find({content_type : queryType, title : { '$regex' : queryTitle, '$options' : 'i'}}).sort({create_date: 'desc'})
        .then(memories => res.json(memories))
        .catch(err => res.status(404).json({noMemories: "No memories found."}));
    }
    else {
        Memory.find().sort({create_date: 'desc'})
        .then(memories => res.json(memories))
        .catch(err => res.status(404).json({noMemories: "No memories found."}));
    }
});

// Route: GET api/memories/:id
// Desc: Get a single memory by id
// Access: Public
router.get('/:id', (req, res) => {
    Memory.findById(req.params.id)
        .then(memory => res.json(memory))
        .catch(err => res.status(404).json({nobooksfound: "No memories Found"}));
});

// Route: POST api/memories
// Desc: add/save memory
// Access: Public
router.post('/', (req, res) => {
    Memory.create(req.body)
        .then(memory => res.json({msg: 'Memory added successfully!'}))
        .catch(err => res.status(400).json({err}));
});

// Route: PUT api/memories/:id
// Desc: Update a memory by id
// Access: Public
router.put('/:id', (req, res) => {
    Memory.findByIdAndUpdate(req.params.id, req.body)
        .then(memory => res.json({msg: "Updated successfully!"}))
        .catch(err => res.status(400).json({error: "Unable to update the DB"}));
});

// Route DELETE api/memories/:id
// Desc: Delete a memory by id
// Access: Public
router.delete("/:id", (req, res) => {
    Memory.findByIdAndRemove(req.params.id, req.body)
        .then(memory => res.json({msg: "Memory deleted successfully!"}))
        .catch(err => res.status(400).json({error: "Unable to delete"}))
});

module.exports = router;