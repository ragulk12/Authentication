require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./DB/config');
const authRoutes = require('./routes/auth');
const PORT = process.env.PORT || 5000;

console.log('Environment Variables:', process.env);

console.log('Mongo URI:', config.mongoURI); // Add this line for debugging
console.log('JWT Secret:', config.jwtSecret);

app.use(express.json());
app.use(cors());

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

app.use('/api/auth', authRoutes);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));