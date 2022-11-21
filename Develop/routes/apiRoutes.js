const store = require('../Develop/db/store.js');
const router = require('express').Router();

    router.get('/notes', (req, res) => {

        
        store.getNote()
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err));
    });

    router.post('/api/notes', (req, res) => {

        
        store.addNote(req.body)
        .then((note) => res.json(note))
        .catch((err) => res.status(500).json(err))
    });

    router.delete('/notes/:id', (req, res) => {
        
        
        store.removedNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err));
    });

module.exports = router;