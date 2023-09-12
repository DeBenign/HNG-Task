const database = require("../model/database");

exports.addName = async (req, res) => {
   
    const userName = {
        name: req.body.name,
    };

    if(userName.length == 0){
        res.status(400).send({message: "provide the name"})
    }

    //ADD A NAME TO THE DATABASE
    try {
        const user = await database.create(userName);
        res.status(200).send(user);
        
    } catch (error) {
        console.log("This is an error: ", error)
    }
};