🔐 Node.js Authentication API

A simple and beginner-friendly REST API for user authentication built with Node.js, Express, MongoDB, and JWT.

✨ Features

👤 User registration

🔑 User login

🔒 Password hashing with bcryptjs

🎫 JWT authentication

🛡️ Protected profile route

🗄️ MongoDB database

⚙️ Environment variables

🧩 Clean MVC-style structure

🛠️ Tech Stack

Node.js

Express.js

MongoDB

Mongoose

bcryptjs

JSON Web Token

dotenv

Nodemon

📁 Project Structure
auth-project/
│
├── config/
│   └── db.js
├── controllers/
│   └── authController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── utils/
│   └── generateToken.js
│
├── .env
├── .gitignore
├── package.json
└── server.js

🚀 Getting Started
1. Install dependencies
npm install

2. Install Nodemon
npm install --save-dev nodemon

3. Create .env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/authdb
JWT_SECRET=your_secret_key


⚠️ Never commit .env to GitHub.

4. Start the server

Development:

npm run dev


Production:

npm start


Server:

http://localhost:5000

🔗 API Endpoints
Method	Endpoint	Description	Auth
POST	/api/auth/register	Register user	❌
POST	/api/auth/login	Login user	❌
GET	/api/auth/profile	Get profile	✅
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


Add the JWT to the request:

Authorization: Bearer YOUR_TOKEN

🔄 Authentication Flow
Register / Login
       ↓
Validate User
       ↓
Hash / Compare Password
       ↓
Generate JWT
       ↓
Return Token
       ↓
Protected Route
       ↓
Verify JWT
       ↓
Return User Data

🔐 Security

Passwords are hashed using bcryptjs before being stored in MongoDB.

JWTs are used to protect authenticated routes.

Environment secrets are stored in .env and excluded from Git.

🧪 Testing

You can test the API using:

Postman

Insomnia

Thunder Client

Frontend application

Recommended flow:

1. Start MongoDB
2. Start the server
3. Register a user
4. Login
5. Copy the JWT
6. Call /api/auth/profile
7. Send JWT as Bearer token

📚 What You'll Learn

This project helps beginners understand:

Express routing

Controllers

Middleware

MongoDB & Mongoose

Password hashing

JWT authentication

REST APIs

Environment variables

Protected routes

🚧 Future Improvements

React frontend

HTTP-only cookies

Refresh tokens

Email verification

Forgot/reset password

Role-based authorization

Input validation

Rate limiting

CORS

Centralized error handling

📄 License

This project is for learning and educational purposes.