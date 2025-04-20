require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB connected"))
  .catch((err) => console.error(" MongoDB error:", err));

// Routes
app.use("/api/todos", require("./routes/todos"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on http://localhost:${PORT}`));
