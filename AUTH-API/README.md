Node.js + Express + MongoDB Authentication API

A beginner-friendly REST API for authentication using Node.js, Express, MongoDB, Mongoose, bcryptjs, and JWT.

Features

User registration

User login

Password hashing with bcryptjs

JWT authentication

Protected profile route

MongoDB integration

Environment variables

Authentication middleware

Tech Stack

Node.js

Express.js

MongoDB + Mongoose

bcryptjs

JSON Web Token (JWT)

dotenv

Nodemon

Project Structure
auth-project/
├── server.js
├── package.json
├── .env
├── .gitignore
├── config/db.js
├── models/User.js
├── routes/authRoutes.js
├── controllers/authController.js
├── middleware/authMiddleware.js
└── utils/generateToken.js

Installation
npm install
npm install --save-dev nodemon


Create .env:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/authdb
JWT_SECRET=my_super_secret_key


Never commit .env to GitHub.

Run
npm run dev


Server:

http://localhost:5000

API Endpoints
Register
POST /api/auth/register

{
  "name": "Ana",
  "email": "ana@gmail.com",
  "password": "123456"
}

Login
POST /api/auth/login

{
  "email": "ana@gmail.com",
  "password": "123456"
}

Profile
GET /api/auth/profile


Header:

Authorization: Bearer YOUR_TOKEN

Authentication Flow
Register/Login
      ↓
Validate user
      ↓
Hash/Compare password
      ↓
Generate JWT
      ↓
Client receives token
      ↓
Protected route
      ↓
Verify JWT
      ↓
Return user profile

Testing

Use Postman, Insomnia, Thunder Client, or a frontend application.

Recommended order:

Start MongoDB.

Start the server.

Register a user.

Login.

Copy the JWT.

Use it on /api/auth/profile.

Future Improvements

React frontend

HTTP-only cookies

Refresh tokens

Email verification

Forgot/reset password

User roles

Input validation

Rate limiting

CORS

Centralized error handling

License

This project is for learning and educational purposes.