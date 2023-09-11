const mongoose = require("mongoose");
const database = require("../model/database")

exports.fetchAllNames = async (req, res) => {
    try {

        const fetchAll = {};
        const fetch = await database.find( fetchAll );

        res.status(201).send({
        fetch,
        message: "All names fetched successfully"
    })

    } catch (error) {
        res.status(400).send("Error occur while fetching data");
        console.log("There is an error: ", error.message);
        
    }
    
}