// models/User.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  username: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ['user', 'admin'], // Define roles here
    default: 'user'
  }
});

const UserRegistration = mongoose.model('UserRegistration', userSchema);

module.exports = UserRegistration;
