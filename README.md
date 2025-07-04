# backend-authentication-


# Node.js Authentication Backend
This is a secure authentication backend built using Node.js, Express.js, MongoDB, Mongoose, bcrypt.js, JWT, and nodemon for development. It supports login/signup functionality with role-based access and middleware.

# 🔧 Features
User registration with hashed passwords

Login authentication using JWT tokens

Role-based access control (Student, Admin)

Middleware for verifying logged-in users and admin access

Secure cookies with httpOnly flag

Password comparison using bcrypt

Development auto-reloading with nodemon

# 🛠️ Tech Stack
Backend: Node.js, Express.js

Database: MongoDB (via Mongoose)

Authentication: bcrypt.js, JWT

Middleware: Custom auth middleware

Dev Tool: nodemon (for automatic server restart)

# 📁 Folder Structure
/controller → Handles signup and login logic

/routes → Contains signup and login route files

/model → Mongoose schema for User

/middleware → Auth middleware for protected routes

index.js → Main entry point

.env → Environment variables

package.json → Includes nodemon as a dev dependency


# 🔃 Development Setup
1️⃣ Install Dependencies
bash
Copy
Edit
npm install express mongoose dotenv bcrypt jsonwebtoken
npm install --save-dev nodemon
2️⃣ Run Server with Nodemon
bash
Copy
Edit
npx nodemon index.js
Or add a script in package.json:

json
Copy
Edit
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
Then run:

bash
Copy
Edit
npm run dev
🌐 API Endpoints
POST /signup
Registers a new user with:

name

email

password

role (Student, Admin, etc.)

POST /login
Authenticates a user:

Validates credentials

Sends JWT token in an httpOnly cookie

🛡️ Middleware
loginAuth.js → Verifies JWT token

adminAuth.js → Allows only Admin role

📄 Environment Variables
<details> <summary>Click to expand</summary>
env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWTKEY=your_jwt_secret
</details>
🧑 Sample User JSON
<details> <summary>Click to expand</summary>
json
Copy
Edit
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456",
  "role": "Student"
}