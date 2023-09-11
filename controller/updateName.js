const mongoose = require("mongoose");
const database = require("../model/database")

exports.updateName = async (req, res) => {
    try {
        const {id} = req.params;
    const name = await database.findByIdAndUpdate(id, req.body);

    //SUCCESS MESSAGE
    res.status(201).send({
        name,
        message: `${name.name} updated successfully using the ID ${id}`
    });

    //IF ID DOES NOT CORRESPOND, FLAG ERROR
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