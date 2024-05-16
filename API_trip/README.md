# Bike Trip API

## Description

This project forms the foundation for the WEB422 course, focusing on loading sample data into MongoDB Atlas and creating a Web API. The provided code guides users through setting up a server, connecting to MongoDB, and defining essential routes for interacting with the data.

This project is closely tied to the [Trip Bikes Interface](https://github.com/FranBlake89/Trip_Bikes_NextJS), demonstrating proficiency in both frontend and backend development. It reflects a comprehensive understanding of web development, showcasing skills in data manipulation, server setup, and API creation to build a well-rounded foundation.

## Objectives

- Load sample data into MongoDB Atlas.
- Build and publish a Web API to interact with the loaded data.
- Implement routes for creating, retrieving, updating, and deleting trip records.

## Routes

1. **POST /api/trips**
   - Adds a new "Trip" document to the collection.
   - Returns the newly created trip object or a failure message.

2. **GET /api/trips?page=1&perPage=5**
   - Retrieves "Trip" objects for a specific page.
   - Accepts numeric query parameters `page` and `perPage`.

3. **GET /api/trips/:id**
   - Retrieves a specific "Trip" object based on the provided `_id` parameter.

4. **PUT /api/trips/:id**
   - Updates a specific "Trip" document in the collection.
   - Accepts `_id` as a route parameter and reads the request body.
   - Returns the updated object or a failure message.

5. **DELETE /api/trips/:id**
   - Deletes a specific "Trip" document from the collection.
   - Accepts `_id` as a route parameter.
   - Returns nothing upon success or a failure message.

## Technologies Used

- **MongoDB Atlas**
- **Node.js**
- **Express.js**
- **Mongoose**
- **npm Packages**:
  - `cors`: Middleware for enabling Cross-Origin Resource Sharing.
  - `express.json`: Middleware for parsing JSON payloads.
  - `dotenv`: Module for loading environment variables from a `.env` file.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB Atlas account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/BikeTripAPI.git
   ```

2. Navigate to the project directory:
   ```bash
   cd BikeTripAPI
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables by creating a `.env` file in the root directory and adding the following:
   ```env
   MONGODB_URI=your_mongodb_atlas_connection_string
   PORT=your_preferred_port
   ```

### Running the Application

1. Start the server:
   ```bash
   npm start
   ```

2. The API will be accessible at `http://localhost:<your_preferred_port>`.


## License

This project is licensed under a custom license that restricts commercial use, private use, and patent use unless explicit permission is granted by the original author. It includes specific conditions and limitations to ensure compliance. For detailed information, see the [LICENSE](../LICENSE.md) file.