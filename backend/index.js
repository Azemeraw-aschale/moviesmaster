const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

// Load environment variables from .env file
dotenv.config();

// Use environment variables
const uri = process.env.MONGODB_URI;
const options = {
  serverSelectionTimeoutMS: 5000,
};

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// Connect to MongoDB
mongoose.connect(uri, options)
  .then(() => {
    console.info('Connected to the MongoDB');
  })
  .catch((e) => {
    console.log('Error:', e);
  });

app.use('/api/auth', require('./routes/auth'));
app.use('/api/add',require('./routes/MoviePost'));
app.use('/api/select',require('./routes/GetMovie'));
app.use('/api/delete',require('./routes/DeleteMovie'));
app.use('/api/update',require('./routes/UpdateMovie'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
