# Bike Trip API

## Description:
This project serves as the foundation for the WEB422 course, focusing on loading sample data into MongoDB Atlas and creating a Web API. The provided code guides users through setting up a server, connecting to MongoDB, and defining essential routes for interacting with the data. 

Additionally, this project is intricately connected to the [`Trip Bikes Interface`](https://github.com/FranBlake89/Trip_Bikes_NextJS), showcasing proficiency not only in frontend but also in backend development. It reflects a holistic understanding of web development, where skills in data manipulation, server setup, and API creation converge to create a well-rounded foundations.

## Objectives:
- Load sample data into MongoDB Atlas.
- Build and publish a Web API to interact with the loaded data.
- Implement routes for creating, retrieving, updating, and deleting trip records.

## Routes:
1. **POST /api/trips**
   - Adds a new "Trip" document to the collection.
   - Returns the newly created trip object or a fail message.

2. **GET /api/trips?page=1&perPage=5**
   - Retrieves all "Trip" objects for a specific page.
   - Accepts numeric query parameters "page" and "perPage."

3. **GET /api/trips/:id**
   - Retrieves a specific "Trip" object based on the provided _id parameter.

4. **PUT /api/trips/:id**
   - Updates a specific "Trip" document in the collection.
   - Accepts _id as a route parameter and reads the request body.
   - Returns the updated object or a fail message.

5. **DELETE /api/trips/:id**
   - Deletes a specific "Trip" document from the collection.
   - Accepts _id as a route parameter.
   - Returns nothing for success or a fail message.

## Technologies Used:
- MongoDB Atlas
- Node.js
- Express.js
- Mongoose (ODM)
- npm packages: cors, express.json, dotenv
