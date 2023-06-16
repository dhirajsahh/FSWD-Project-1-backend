const mongoose = require("mongoose");

require("dotenv").config();
const mongodbUri = process.env.MONGODB_URI;
const connectdb = async () => {
  try {
    const connect = await mongoose.connect(mongodbUri);
    console.log("Database connected succesfully");
    console.log(connect.connection.host);
  } catch (error) {
    console.log("error occured during the database connection");
  }
};
module.exports = { connectdb };
