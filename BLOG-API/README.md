📝 Blog API

A simple RESTful Blog API built with Node.js, Express, MongoDB, and Mongoose.

✨ Features

📝 Create blogs

📖 Get all blogs

🔍 Get single blog

✏️ Update blog

🗑️ Delete blog

🗄️ MongoDB database

⚙️ Environment variables

🛠️ Tech Stack

Node.js

Express.js

MongoDB

Mongoose

dotenv

Nodemon

📁 Structure
blog-api/
├── config/db.js
├── controllers/blogController.js
├── models/Blog.js
├── routes/blogRoutes.js
├── middleware/errorMiddleware.js
├── .env
├── .gitignore
├── package.json
└── server.js

🚀 Setup
git clone <your-repository-url>
cd blog-api
npm install
npm install --save-dev nodemon


Create .env:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/blogdb


Start:

npm run dev


API:

http://localhost:5000

🔗 API Endpoints
Method	Endpoint	Description
GET	/api/blogs	Get all blogs
GET	/api/blogs/:id	Get one blog
POST	/api/blogs	Create blog
PUT	/api/blogs/:id	Update blog
DELETE	/api/blogs/:id	Delete blog
📝 Example
Create Blog
{
  "title": "Learn Node.js",
  "content": "Node.js is a JavaScript runtime.",
  "author": "John Doe"
}

API Flow
Client
  ↓
Route
  ↓
Controller
  ↓
Mongoose
  ↓
MongoDB
  ↓
Response

🧪 Testing

Test with:

Postman

Insomnia

Thunder Client

cURL

🚧 Future Improvements

🔐 Authentication

👤 User accounts

💬 Comments

❤️ Likes

🏷️ Categories

🔎 Search

📄 Pagination

👑 Admin roles

📄 License

For learning and educational purposes.