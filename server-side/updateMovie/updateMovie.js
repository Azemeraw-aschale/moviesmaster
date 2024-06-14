const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cloudinary = require('cloudinary').v2;
const fs = require('fs').promises;


router.put('/api/profile/:userId', async (req, res) => {
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

  module.exports=router;