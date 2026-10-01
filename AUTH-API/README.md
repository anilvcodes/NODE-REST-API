Node.js + Express + MongoDB Authentication API

A beginner-friendly authentication REST API built with Node.js, Express, MongoDB, Mongoose, bcryptjs, and JWT.

This project demonstrates:

User registration

User login

Password hashing with bcryptjs

JWT authentication

Protected profile route

MongoDB database integration

Environment variables with .env

Middleware-based authentication

Clean project structure

Tech Stack

Node.js

Express.js

MongoDB

Mongoose

bcryptjs

JSON Web Token (JWT)

dotenv

Nodemon

Project Structure
auth-project/
│
├── server.js
├── package.json
├── .env
├── .gitignore
│
├── config/
│   └── db.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── authRoutes.js
│
├── controllers/
│   └── authController.js
│
├── middleware/
│   └── authMiddleware.js
│
└── utils/
    └── generateToken.js

Installation
1. Clone or create the project
mkdir auth-project
cd auth-project

2. Initialize npm
npm init -y

3. Install dependencies
npm install express mongoose bcryptjs jsonwebtoken dotenv


Install Nodemon as a development dependency:

npm install --save-dev nodemon

Environment Variables

Create a .env file in the root directory:

PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/authdb

JWT_SECRET=my_super_secret_key_12345


For MongoDB Atlas, use your Atlas connection string:

MONGO_URI=mongodb+srv://USERNAME:PASSWORD@cluster.mongodb.net/authdb

Important

Never commit your .env file to GitHub.

Your .gitignore should contain:

node_modules/
.env

Running the Project
Development mode
npm run dev

Production/start mode
npm start


The server will run at:

http://localhost:5000


You should see:

MongoDB connected
Server running on http://localhost:5000

API Endpoints
Register

Create a new user.

POST /api/auth/register


Request body:

{
  "name": "Ana",
  "email": "ana@gmail.com",
  "password": "123456"
}


Example response:

{
  "message": "User registered successfully",
  "user": {
    "id": "68...",
    "name": "Ana",
    "email": "ana@gmail.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIs..."
}

Login

Authenticate an existing user.

POST /api/auth/login


Request body:

{
  "email": "ana@gmail.com",
  "password": "123456"
}


Example response:

{
  "message": "Login successful",
  "user": {
    "id": "68...",
    "name": "Ana",
    "email": "ana@gmail.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIs..."
}

Get Profile

Get the authenticated user's profile.

GET /api/auth/profile


This is a protected route.

Send the JWT in the request header:

Authorization: Bearer YOUR_TOKEN_HERE


Example response:

{
  "user": {
    "_id": "68...",
    "name": "Ana",
    "email": "ana@gmail.com",
    "createdAt": "...",
    "updatedAt": "..."
  }
}

Authentication Flow
Registration
Client
  │
  │ POST /register
  ▼
Express Route
  │
  ▼
Auth Controller
  │
  ├── Validate input
  │
  ├── Check existing user
  │
  ├── Hash password
  │
  ▼
MongoDB
  │
  ▼
Generate JWT
  │
  ▼
Return token

Login
Client
  │
  │ POST /login
  ▼
Express Route
  │
  ▼
Auth Controller
  │
  ├── Find user
  │
  ├── Compare password
  │
  ▼
Generate JWT
  │
  ▼
Return token

Protected Route
Client
  │
  │ GET /profile
  │
  │ Authorization: Bearer TOKEN
  ▼
Auth Middleware
  │
  ▼
Verify JWT
  │
  ▼
req.user
  │
  ▼
Auth Controller
  │
  ▼
MongoDB
  │
  ▼
Return profile

Password Security

Passwords are never stored as plain text.

During registration:

const hashedPassword = await bcrypt.hash(password, 10);


The hashed password is stored in MongoDB.

During login:

const isPasswordCorrect = await bcrypt.compare(
  password,
  user.password
);


The original password is compared against the stored hash.

JWT Authentication

After successful registration or login, the server creates a JWT:

const token = generateToken(user._id);


The client then sends the token when accessing protected routes:

Authorization: Bearer YOUR_TOKEN


The authentication middleware verifies the token:

const decoded = jwt.verify(
  token,
  process.env.JWT_SECRET
);


If the token is valid, the request continues.

If the token is invalid or expired, the server returns:

{
  "message": "Invalid or expired token"
}

Logout

This basic version does not maintain a server-side JWT blacklist.

For a client application, logout can remove the stored token.

For example, a frontend might clear its authentication state:

localStorage.removeItem("token");


For more advanced authentication, you can implement HTTP-only cookies and refresh tokens.

Testing

You can test the API using:

Postman

Insomnia

Thunder Client

A frontend application

Recommended testing order

Start MongoDB.

Start the Node.js server.

Register a user.

Copy the returned JWT.

Login with the same user.

Copy the login JWT.

Call /api/auth/profile.

Add the JWT as a Bearer token.

Test the protected route without a token.

Test with an invalid/expired token.

Common Errors
MongoDB connection failed

Check that MongoDB is running and that MONGO_URI is correct.

For local MongoDB:

MONGO_URI=mongodb://127.0.0.1:27017/authdb

Invalid or expired token

Make sure the request contains:

Authorization: Bearer YOUR_TOKEN


Also make sure JWT_SECRET has not changed.

User already exists

The email is already registered in the database.

Use another email or remove the existing user from MongoDB.

Learning Goals

This project is designed to help beginners understand:

Express routes

Controllers

MongoDB and Mongoose

Password hashing

JWT authentication

Express middleware

HTTP requests and responses

Protected API routes

Environment variables

Basic project organization

Possible Improvements

After understanding this version, you can extend it with:

React frontend

HTTP-only cookies

Refresh tokens

Email verification

Forgot password

Reset password

User roles

Admin authentication

Input validation

Rate limiting

CORS configuration

Centralized error handling

Request logging

Production security configuration

License

This project is intended for learning and educational purposes.