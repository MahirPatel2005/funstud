import express from 'express';
import { Game } from '../models/Game.js';

const router = express.Router();

// Get all games with optional filters
router.get('/', async (req, res) => {
  try {
    const { category, difficulty } = req.query;
    const query = {};
    
    if (category) query.category = category;
    if (difficulty) query.difficulty = difficulty;
    
    const games = await Game.find(query);
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch games' });
  }
});

// Get popular games
router.get('/popular', async (req, res) => {
  try {
    const popularGames = await Game.find({ isPopular: true })
      .sort({ playerCount: -1 })
      .limit(4);
    
    res.json(popularGames);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch popular games' });
  }
});

export { router as gamesRouter };