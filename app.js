// Import necessary modules
const createError = require('http-errors');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

// Import Routes
const BusRoutes = require("./routes/busroutes");

// Create Express app
const app = express();

// Middleware Setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use Routes
app.use("/", BusRoutes);

// Error Handling for 404
app.use((req, res, next) => {
    next(createError(404));
});

mongoose.connect("mongodb+srv://praveenkumarv1207:Praveenkumar@testing.tusro.mongodb.net/")
    .then(() => {
        console.log("Connected successfully to MongoDB");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB", err);
});

// Error Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
});

// Start the Server
app.listen(9001, () => {
    console.log("Server started on http://localhost:9001");
});

module.exports = app;
  