const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");
const cloudinary = require('cloudinary').v2;
const fs = require('fs').promises;


cloudinary.config({ 
  cloud_name: 'azii', 
  api_key: '821493881388656', 
  api_secret: 'kf4HQKhl8eLoi4rWWRggYiM2HnE' 
});


dotenv.config();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ dest: 'uploads/' });

app.post("/create", async (req, res) => {
  const { firstname, lastname, username, password } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await prisma.user.create({
      data: { firstname, lastname, username, password: hashedPassword }
    });

    res.send("User added");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating user");
  }
});
app.get("/genres", async (req, res) => {
  try {
    const movies = await prisma.movie.findMany();
    res.send(movies);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving movies");
  }
});


app.post("/moviecreate", upload.single('image'), async (req, res) => {
  const { title, director, genre } = req.body;
  const imageUrl = req.file ? req.file.path : null;

  try {
    let cloudinaryImageUrl = null;

    if (imageUrl) {
      // Upload the image to Cloudinary
      const result = await cloudinary.uploader.upload(imageUrl);
      cloudinaryImageUrl = result.secure_url;

      // Optionally, delete the local file after uploading to Cloudinary
      await fs.unlink(imageUrl);
    }

    await prisma.movie.create({
      data: { title, director, genre, image: cloudinaryImageUrl }
    });

    res.send({ message: "Movie added", userData: { title, director, genre, image: cloudinaryImageUrl } });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating movie");
  }
});

app.get("/movielist", async (req, res) => {
  try {
    const movies = await prisma.movie.findMany();
    res.send(movies);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching movies");
  }
});

app.put('/api/profile/:userId', async (req, res) => {
  const { userId } = req.params;
  const { firstname, lastname, username } = req.body;

  try {
    await prisma.user.update({
      where: { id: parseInt(userId) },
      data: { firstname, lastname, username }
    });

    res.json({ message: 'Profile updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

app.get('/api/profileview/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(userId) },
      select: { firstname: true, lastname: true, username: true }
    });

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

app.delete("/moviedelete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.movie.delete({ where: { id: parseInt(id) } });
    res.send("Movie deleted");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting movie");
  }
});

app.get("/totalmovies", async (req, res) => {
  try {
    const totalMovies = await prisma.movie.count();
    res.send({ total_movies: totalMovies });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching total movies");
  }
});

app.get("/totalusers", async (req, res) => {
  try {
    const totalUsers = await prisma.user.count();
    res.send({ total_users: totalUsers });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching total users");
  }
});

app.get("/check_username/:username", async (req, res) => {
  const { username } = req.params;

  try {
    const count = await prisma.user.count({ where: { username } });
    res.send({ exists: count > 0 });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error checking username");
  }
});

app.get("/userlist", async (req, res) => {
  try {
    const users = await prisma.user.findMany({ where: { role: 0 } });
    res.send(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching users");
  }
});

app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.user.delete({ where: { id: parseInt(id) } });
    res.send("User deleted");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting user");
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { username } });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        const token = jwt.sign({ id: user.id }, "Tewo Tecnology Solution");
        res.status(200).send({ role: user.role, data: "success", token });
      } else {
        res.status(401).send({ token: null });
      }
    } else {
      res.status(401).send({ token: null });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal server error");
  }
});

app.listen(3001, () => {
  console.log("Server started at http://localhost:3001");
});
