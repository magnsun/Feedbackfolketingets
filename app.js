const express = require('express');
const mongoose = require('mongoose');
const perosnRoutes = require('./routes/personRoutes');

const app = express();

// Connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Middleware for JSON body parsing (without `body-parser`)
app.use(express.json());

// Routes
app.use('/folketingets', perosnRoutes);

// Starts the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
