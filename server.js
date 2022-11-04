const express = require("express");
require("dotenv").config();
const app = express();

const logger = require("morgan");
const connectDB = require("./config/db");

// Initialize Middleware
app.use(express.json({ extended: false }));

// Extra security packages
// const helmet = require("helmet");
const cors = require("cors");
// const xss = require("xss-clean");
// const rateLimiter = require("express-rate-limit");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(logger("dev"));
app.get("/", (req, res) => {
  res.json({ msg: "Try /api/v1/stage endpoint to get what you want!" });
});
app.use("/api/v1/stage", require("./routes/stage"));

app.listen(PORT, () => {
  try {
    // connectDB(process.env.MONGODB_URI);
    console.log(`Server is running on port ${PORT}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
});
