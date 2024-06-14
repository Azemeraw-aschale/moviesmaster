const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cloudinary = require('cloudinary').v2;
const fs = require('fs').promises;


router.get("/totalmovies", async (req, res) => {
    try {
      const totalMovies = await prisma.movie.count();
      res.send({ total_movies: totalMovies });
    } catch (err) {
      console.error(err);
      res.status(500).send("Error fetching total movies");
    }
  });
  
  router.get("/totalusers", async (req, res) => {
    try {
      const totalUsers = await prisma.user.count();
      res.send({ total_users: totalUsers });
    } catch (err) {
      console.error(err);
      res.status(500).send("Error fetching total users");
    }
  });
  
  router.get("/check_username/:username", async (req, res) => {
    const { username } = req.params;
  
    try {
      const count = await prisma.user.count({ where: { username } });
      res.send({ exists: count > 0 });
    } catch (err) {
      console.error(err);
      res.status(500).send("Error checking username");
    }
  });
  
  router.get("/userlist", async (req, res) => {
    try {
      const users = await prisma.user.findMany({ where: { role: 0 } });
      res.send(users);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error fetching users");
    }
  });
  router.get('/api/profileview/:userId', async (req, res) => {
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
  router.get("/movielist", async (req, res) => {
    try {
      const movies = await prisma.movie.findMany();
      res.send(movies);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error fetching movies");
    }
  });

  router.get("/genres", async (req, res) => {
    try {
      const movies = await prisma.movie.findMany();
      res.send(movies);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error retrieving movies");
    }
  });

  module.exports = router;