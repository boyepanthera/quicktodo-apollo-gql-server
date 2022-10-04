const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: String,
  userId: { type: String, ref: 'Note' },
  completed: {
    type: Boolean,
    defautl: false,
  },
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
