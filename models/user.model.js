const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  password: String,
  email: String,
  tasks: [
    {
      type: String,
      ref: 'Task',
    },
  ],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
