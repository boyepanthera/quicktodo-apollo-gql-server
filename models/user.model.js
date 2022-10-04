const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  password: String,
  email: String,
  notes: [
    {
      type: String,
      ref: 'Note',
    },
  ],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
