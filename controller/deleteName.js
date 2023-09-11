const mongoose = require("mongoose");
const database = require("../model/database")

exports.deleteName = async (req, res) => {

    //CHECK IF A NAME EXIST IN THE DATABASE
    try {
        const {id} = req.params;
    const name = await database.findByIdAndDelete(id);

    //RETURN SUCCESS MESSAGE IF A NAME FOUND IN THE DATABASE
    res.status(201).send({
        name,
        message: `${name.name} deleted from the database successfully`
    });

    //FLAG ERROR IF NOT FOUND
    if (!id) {
        console.log("No such user");
        res.status(401).send("No such user")
        }

    } 
    
    //BAD REQUEST
    catch (error) {
        res.status(400).send("Error occur while fetching the name parameter");
        console.log("There is an error: ", error.message);
        
    }
    
}