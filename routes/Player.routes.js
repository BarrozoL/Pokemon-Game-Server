// server/routes/player.routes.js
const { Router } = require("express");
const Player = require("../models/Player.Model");

const router = Router();

// GET all players
router.get("/player", async (req, res) => {
  try {
    const players = await Player.findAll();
    return res.status(200).json(players);
  } catch (error) {
    console.error("Error fetching players:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// POST create a new player
router.post("/player", async (req, res) => {
  try {
    const { username, level } = req.body;
    const newPlayer = await Player.create({ username, level });
    return res.status(201).json(newPlayer);
  } catch (error) {
    console.error("Error creating player:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
