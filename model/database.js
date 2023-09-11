const mongoose = require("mongoose");

//Mongoose Configuration
const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL);
const conn = mongoose.connection;

//Open Connection
conn.once("open", () => console.log("Database connected successfully"));

//Schema define
const userSchema = new mongoose.Schema({
   
    name: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model("CRUD_OPERATION", userSchema);
module.exports = userModel;