//server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./models/db");



const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());


// Routes
app.use("/api/todos", require("./routes/todosRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on http://localhost:${PORT}`));
