const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: String,
  userId: { type: String, ref: 'User' },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
