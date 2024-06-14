const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");
const cloudinary = require('cloudinary').v2;
const fs = require('fs').promises;

dotenv.config();

app.use(cors());
app.use(express.json());

const addChannelRouter = require('./addValue/addMovie');
const fetchMovieRouter = require('./selectMovie/selectMovie');
const updateMovieRouter = require('./updateMovie/updateMovie');
const userAuthRouter = require('./deleteMovie/deleteMovie');

// Use the routers
app.use(addChannelRouter);
app.use(fetchMovieRouter);
app.use(updateMovieRouter);
app.use(userAuthRouter);

const prisma = new PrismaClient();

app.listen(3001, async () => {
  try {
    await prisma.$connect();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
  console.log('Server is running on port 3001');
});
