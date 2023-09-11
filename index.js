const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const env = require("dotenv").config();
const mongoose = require("mongoose");
const database = require("./model/database");

const addName = require("./controller/addName");
const fetchAllNames = require("./controller/fetchAllNames");
const fetchName = require("./controller/fetchName");
const updateName = require("./controller/updateName");
const deleteName = require("./controller/deleteName");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//HOMEPAGE
app.get("/", (req, res) => {
    res.send("You are welcome to CRUD OPERATION ENDPOINTS")
})

//URL ENDPOINTS
app.post("/api/addName", addName.addName);
app.get("/api/fetchAllNames", fetchAllNames.fetchAllNames);
app.get("/api/fetchName/:id", fetchName.fetchName);
app.put("/api/updateName/:id", updateName.updateName);
app.delete("/api/deleteName/:id", deleteName.deleteName);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));