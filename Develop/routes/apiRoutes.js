const store = require('../db/store.js');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {

        store
        .getNote()
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err));
    });

    app.post('/api/notes', (req, res) => {

        store
        .addNote(req.body)
        .then((note) => {
            return res.json(note);
        })
        .catch((err) => res.status(500).json(err));
    });

    app.delete('/api/notes/:id', (req, res) => {
        
        store
        .removedNote(req.params.id)
        .then(() => {
            return res.json({ ok: true });
        })
        .catch((err) => res.status(500).json(err));
    });
};