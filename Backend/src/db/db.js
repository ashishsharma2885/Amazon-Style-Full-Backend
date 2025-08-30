const url ="mongodb+srv://ashishsharma60142_db_user:8081@cluster0.k2jlhwj.mongodb.net/";
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url);
    console.log(`MongoDB Connected: ${conn.connection.host} ✅`);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

module.exports = connectDB;