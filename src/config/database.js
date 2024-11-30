const mongoose = require("mongoose")
require("dotenv").config();

const connectToDB = async()=>{
   try {
      await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.2orzh.mongodb.net/devTinder`)
   } catch (error) {
      console.log("DB not connected!")
      process.exit(1);
   }
}

module.exports = {connectToDB}

