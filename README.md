GETTING STARTED:  
This repository contains a basic implementation of CRUD operations for managing a resource with a "name" attribute. The primary identifier for each resource is the "id" field.
To use this CRUD application, follow the instructions below:

Prerequisites  
Before getting started, make sure you have the following prerequisites:

Node.js and npm installed on your machine.

INSTALLATION   
•	Clone this repository to your local machine.
Git clone repository-url

•	Navigate to the project directory.  
   cd project-directory

•	Install the dependencies.    
  npm init -y    
  npm install

•	Start the application.    
  npm start








DOCUMENTATION - CRUD OPERATION

The project aims to develop the backend of a real-world application in Node.js, Express.js and MongoDB. With the CRUD OPERATION, you can do the following:

1. Add a new user using just "name" as an attribute
2. List down all names present in the db
3. Find a particular name using "ID" in the db
4. Update a particular name using "ID" in the db
5. Delete a name
I am required to develop WEB APIs using Node.js which will send and receive data in the form of JSON to/from in the CRUD APPLICATION.

The application expose endpints required to do the CRUD operation with the database maintained in MongoDB.

The application will use several nodoe packageds includeing Express and Mongoose

CRUD Schema
The CRUD schema will consist just this field:
name: STRING

HTTP Status
I have leaned the different HTTP response status codes and how to implement them when creatign the API.
Output and return the corresponding HTTP status codes based on the functionality or message





The response codes I make use in this project are as follows:
HTTP Status OK: 201: This will be used if the request made by the user results in a successful response and the user gets what he wants

HTTP Status 500: BAD REQUEST: Thsi will be used if the server does not understand the request due to invalid syntax or an internal error

RESTAPI ENDPOINTS = ADD
POST /api
This API will collect new name and add it to the database.

RESPONSE BODY AND EXPECTED OUTPUT

![image](https://github.com/DeBenign/HNG-Task/assets/95944367/efe6b6cf-e57f-4800-8c70-78a0ba258423)




On successful creation of the name, it should return status code 201


RESTAPI ENDPOINTS = GET NAMES
GET /api
This API will return all the names present in the database.

RESPONSE BODY AND EXPECTED OUTPUT
![image](https://github.com/DeBenign/HNG-Task/assets/95944367/07ebc98f-06e8-4986-9933-32eb12d67d44)




On successful creation of the name, it should return status code 201.
If there are no names, it should return [].



RESTAPI ENDPOINTS = GET NAME
GET /api/:id
This API will return the name specify by the ID in the database.

RESPONSE BODY AND EXPECTED OUTPUT

![image](https://github.com/DeBenign/HNG-Task/assets/95944367/af16b21c-e5ba-4e75-83f7-83332f096d27)



On successful creation of the name, it should return status code 201.
If there is no such name, it should return "NO SUCH NAME"






RESTAPI ENDPOINTS = UPDATE NAME
PUT /api/:id
This API will update the name specify by the ID in the database.

RESPONSE BODY AND EXPECTED OUTPUT

![image](https://github.com/DeBenign/HNG-Task/assets/95944367/ebedba48-ed73-428d-b581-8517154cefa1)


On successful creation of the name, it should return status code 201.
If there is no such name, it should return "NO SUCH NAME"






RESTAPI ENDPOINTS = DELETE NAME
DELETE /api/:id
This API will delete the name specify by the ID in the database.

RESPONSE BODY AND EXPECTED OUTPUT

![image](https://github.com/DeBenign/HNG-Task/assets/95944367/c525fabf-6150-4381-8a82-dbef5ba52632)


On successful creation of the name, it should return status code 201.
If there is no such name, it should return "NO SUCH NAME"
