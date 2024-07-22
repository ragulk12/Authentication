const { mongo } = require('mongoose');

// server/DB/config.js
require('dotenv').config;

console.log('MONGO_URI from config:',process.env.MONGO_URI);
console.log('JWT_SECRET from config:',process.env.JWT_SECRET);

module.exports = {
    mongoURI: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET
}