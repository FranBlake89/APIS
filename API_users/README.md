# User Art Musseum API

An Express.js API with JWT authentication for user registration, login, favorites, and history management.

> [!IMPORTANT]  
> This project is intricately connected to the [`Art Musseum Interface`](https://github.com/FranBlake89/Art_Museum_React)

## Features

- User registration and login with JWT authentication.
- Secure endpoints for managing favorites and viewing history.
- Utilizes Passport, MongoDB, and CORS for enhanced security and functionality.

## Endpoints

- POST /api/user/register - User registration
- POST /api/user/login - User login
- GET /api/user/favourites - View user favorites
- PUT /api/user/favourites/:id - Add a favorite
- DELETE /api/user/favourites/:id - Remove a favorite
- GET /api/user/history - View user history
- PUT /api/user/history/:id - Add to user history
- DELETE /api/user/history/:id - Remove from user history

## Technologies Used

- Express.js
- JWT
- Passport
- MongoDB
- CORS

## License

This project is licensed under a custom license that restricts commercial use, private use, and patent use unless explicit permission is granted by the original author. It includes specific conditions and limitations to ensure compliance. For detailed information, see the [LICENSE](../LICENSE.md) file.
