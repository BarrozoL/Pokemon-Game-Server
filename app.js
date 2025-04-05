require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./db/db"); // Our Sequelize instance

const Player = require("./models/Player.Model"); // Import the Player model

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

// Simple route to confirm it's working
app.get("/api", (req, res, next) => {
  res.json({ message: "Server is running!" });
});

// Sync database, then listen
sequelize
  .sync()
  .then(() => {
    console.log("✅ Database synced");
    const PORT = process.env.PORT || 5005;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("❌ Error syncing database:", err));
