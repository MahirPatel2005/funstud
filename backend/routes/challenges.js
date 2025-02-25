import express from 'express';
import { Challenge } from '../models/Challenge.js';

const router = express.Router();

router.get('/daily', async (req, res) => {
  try {
    const dailyChallenges = await Challenge.find({
      isActive: true,
      dateCreated: {
        $gte: new Date(new Date().setHours(0, 0, 0, 0))
      }
    }).limit(5);
    
    res.json(dailyChallenges);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch daily challenges' });
  }
});

export { router as challengesRouter };