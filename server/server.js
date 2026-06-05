const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://lead-management-crm-teal.vercel.app"
    ],
    credentials: true,
  })
);
app.use(express.json());

// Auth Routes
app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

// Lead Routes
app.use(
  "/api/leads",
  require("./routes/leadRoutes")
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});