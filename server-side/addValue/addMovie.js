const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const dotenv = require("dotenv");
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const fs = require('fs').promises;


cloudinary.config({ 
  cloud_name: 'azii', 
  api_key: '821493881388656', 
  api_secret: 'kf4HQKhl8eLoi4rWWRggYiM2HnE' 
});


dotenv.config();


const upload = multer({ dest: 'uploads/' });

router.post("/create", async (req, res) => {
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
module.exports = router;

router.post("/moviecreate", upload.single('image'), async (req, res) => {
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
  module.exports = router;
  router.post('/login', async (req, res) => {
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
  module.exports = router;