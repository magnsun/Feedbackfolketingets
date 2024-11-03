const express = require('express');
const mongoose = require('mongoose');
const personRoutes = require('./routes/personRoutes');

const app = express();

// Connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Middleware for JSON body parsing (without `body-parser`)
app.use(express.json());

// Routes
app.use('/folketingets', personRoutes);

// Starts the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
