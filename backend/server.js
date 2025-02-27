const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allow JSON request bodies

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/bookshowdb")
    .then(() => console.log("✅ MongoDB connected successfully"))
    .catch((err) => console.error("❌ Error connecting to MongoDB:", err));

// Test Route
app.get("/api", (req, res) => {
    res.send("✅ API is working at /api!");
});

// Import Routes
const userRoutes = require("./routes/auth"); 
app.use("/api/users", userRoutes); 

const eventRoutes = require("./routes/events"); 
app.use("/api/events", eventRoutes); 

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
