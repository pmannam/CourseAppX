const mongoose = require('mongoose');
require('dotenv').config();

const DB_CONNECT = process.env.DB_CONNECT;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = { connectToDatabase };
