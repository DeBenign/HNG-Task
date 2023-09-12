const mongoose = require("mongoose");
const database = require("../model/database")

exports.fetchName = async (req, res) => {
   //FIND A NAME USING AN ID
    try {
        const {id} = req.params;
        const name = await database.findById(id);

//IF ID NOT CORRESPONDS, FLAG ERROR
    if (!id) {
    console.log("No such user");
    res.status(401).send({message: "No such user"});
    }

    //IF ID CORRESPOND, NAME FOUND, RETURN SUCCESS MESSAGE
    res.status(201).send({
        name,
        message: `${name.name} fetched from the database successfully`
    });

    
    } 
    
    //BAD REQUEST
    catch (error) {
        res.status(400).send("Error occur while fetching the name parameter");
        console.log("There is an error: ", error.message);
        
    }
    
}