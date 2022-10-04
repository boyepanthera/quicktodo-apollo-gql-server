const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
  title: String,
  userId: { type: String, ref: 'Note' },
  completed: {
    type: Boolean,
    defautl: false,
  },
});

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
