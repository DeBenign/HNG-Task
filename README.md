GETTING STARTED
This repository contains a basic implementation of CRUD operations for managing a resource with a "name" attribute. The primary identifier for each resource is the "id" field.
To use this CRUD application, follow the instructions below:

Prerequisites
Before getting started, make sure you have the following prerequisites:

Node.js and npm installed on your machine.

INSTALLATION
•	Clone this repository to your local machine.
Git clone <repository-url>

•	Navigate to the project directory.
cd <project-directory>

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
POST /api/addName
This API will collect new name and add it to the database.

RESPONSE BODY

![image](https://github.com/DeBenign/HNG-Task/assets/95944367/eae117e6-f122-40f4-bf91-5e7200ae7184)



EXPECTED OUTPUT

![image](https://github.com/DeBenign/HNG-Task/assets/95944367/5e27a449-8bf4-47b1-b8d5-217cea97a816)


On successful creation of the name, it should return status code 201


RESTAPI ENDPOINTS = GET NAMES
GET /api/fetchAllNames
This API will return all the names present in the database.

RESPONSE BODY

![image](https://github.com/DeBenign/HNG-Task/assets/95944367/0fb0204c-35b9-4d24-a080-3260c9a794d6)


EXPECTED OUTPUT

![image](https://github.com/DeBenign/HNG-Task/assets/95944367/c20a27b6-ec1a-431b-97d5-92f58250c9b6)

On successful creation of the name, it should return status code 201.
If there are no names, it should return [].



RESTAPI ENDPOINTS = GET NAME
GET /api/fetchName/:id
This API will return the name specify by the ID in the database.

RESPONSE BODY

![image](https://github.com/DeBenign/HNG-Task/assets/95944367/91466d8f-5265-4c7d-a4d1-2fec7ede05b7)

EXPECTED OUTPUT

![image](https://github.com/DeBenign/HNG-Task/assets/95944367/9140cb3e-5421-4d54-8367-aca3c734121a)

On successful creation of the name, it should return status code 201.
If there is no such name, it should return "NO SUCH NAME"






RESTAPI ENDPOINTS = UPDATE NAME
PUT /api/updateName/:id
This API will update the name specify by the ID in the database.

RESPONSE BODY

![image](https://github.com/DeBenign/HNG-Task/assets/95944367/1081d2b0-84a0-4634-830a-3b0f2a1bfcb1)

EXPECTED OUTPUT

![image](https://github.com/DeBenign/HNG-Task/assets/95944367/2ce20d0a-4899-449f-b9b7-ca8647d405a2)


On successful creation of the name, it should return status code 201.
If there is no such name, it should return "NO SUCH NAME"






RESTAPI ENDPOINTS = DELETE NAME
DELETE /api/deleteName/:id
This API will delete the name specify by the ID in the database.

RESPONSE BODY

![image](https://github.com/DeBenign/HNG-Task/assets/95944367/7d7131bf-62e6-4f3e-88ec-c41e1bf81ac0)


EXPECTED OUTPUT

![image](https://github.com/DeBenign/HNG-Task/assets/95944367/d722ccac-7e96-446f-9a83-c6736acce894)

On successful creation of the name, it should return status code 201.
If there is no such name, it should return "NO SUCH NAME"
