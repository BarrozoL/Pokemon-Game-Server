const { DataTypes } = require("sequelize");
const sequelize = require("../db/db");

const Player = sequelize.define("Player", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  characterName: {
    type: DataTypes.STRING,
  },
  level: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

module.exports = Player;
