require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false, // Turn off SQL logging in the console
});

sequelize
  .authenticate()
  .then(() => console.log("✅ PostgreSQL connected!"))
  .catch((err) => console.error("❌ DB connection error:", err));

module.exports = sequelize;
