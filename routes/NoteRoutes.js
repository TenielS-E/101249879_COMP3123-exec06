const noteModel = require('../models/Notes.js');
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to save the note
    const note = new noteModel(Note)
    // Save the note to MongoDB
    const newNote = note.save()
    res.send(newNote)
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to returns all note
    noteModel.find()
        .then((notes) => {
            res.send(notes)
        }).catch((err) => {
            res.status(500).send({message: err.message})
    })
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
    noteModel.findById(req.params.noteid)
        .then((note) => {
            if(note) {
                res.send(note)
            } else {
                res.status(404).send({message: "Note not found"})
            }
        }).catch((err) => {
            res.status(500).send({message: err.message})
    })
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
    try {
        const updatedNote = noteModel.findByIdAndUpdate(req.params.bookid)
        if(updatedNote) {
            res.send(updatedNote)
        } else {
            res.status(404).send({message: "Note not found"})
        }
       } catch (error) {
           res.status(500).send({message: error.message})
       }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
    
});
