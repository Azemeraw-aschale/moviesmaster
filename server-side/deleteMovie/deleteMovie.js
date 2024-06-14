const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



router.delete("/moviedelete/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      await prisma.movie.delete({ where: { id: parseInt(id) } });
      res.send("Movie deleted");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error deleting movie");
    }
  });

router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      await prisma.user.delete({ where: { id: parseInt(id) } });
      res.send("User deleted");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error deleting user");
    }
  });
  module.exports = router;