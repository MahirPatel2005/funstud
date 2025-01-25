import express from 'express';
import { UserStats } from '../models/User.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // In a real app, get userId from auth middleware
    const userId = 'example-user-id';
    const stats = await UserStats.findOne({ userId });
    
    if (!stats) {
      return res.status(404).json({ error: 'Stats not found' });
    }
    
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

export { router as statsRouter };