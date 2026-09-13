# 🍔 Food Ordering App

A full-stack **Food Ordering Web Application** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)** during my **MERN Stack Development Internship at Web Stack Academy (WSA)**.

The application allows users to browse food items, manage their cart, place orders, and interact with the platform through a responsive web interface.

## 🚀 Features

* 👤 User Registration & Login
* 🔐 JWT-based Authentication & Authorization
* 🍔 Browse Food Items
* 🛒 Add and Remove Items from Cart
* 📦 Place and Manage Orders
* 🔎 Food Item / Restaurant Browsing
* 📱 Responsive User Interface
* 🔗 RESTful APIs
* 🗄️ MongoDB Database Integration
* ⚡ React-based Frontend
* 🖥️ Node.js & Express.js Backend

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3

### Backend

* Node.js
* Express.js
* REST APIs
* JWT Authentication

### Database

* MongoDB
* Mongoose

## 📂 Project Structure

```text
Food-Delivery-App/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── app.js
│   └── package.json
│
└── README.md
```

> The exact folder structure may vary depending on the current version of the project.

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd Food-Delivery-App
```

### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 4. Install Backend Dependencies

Open another terminal:

```bash
cd backend
npm install
```

### 5. Configure Environment Variables

Create a `.env` file inside the backend folder and add the required environment variables.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_api_key
STRIPE_API_KEY=your_strip_api_key
```

### 6. Run the Backend

```bash
npm start
```

### 7. Run the Frontend

Inside the frontend directory:

```bash
npm start
```

The application should now be available locally.

## 🔐 Authentication

The application uses **JWT (JSON Web Token)** for authentication and authorization.

Users can:

* Create an account
* Log in securely
* Access authenticated functionality
* Place and manage orders

## 🔄 Application Flow

```text
User
  ↓
React.js Frontend
  ↓
REST API
  ↓
Express.js + Node.js Backend
  ↓
MongoDB Database
```

## 🎯 Internship Project

This project was developed as part of my **MERN Stack Development Internship at Web Stack Academy (WSA)**.

It helped me gain practical experience in:

* Full-stack web development
* React.js development
* Node.js & Express.js
* MongoDB & Mongoose
* REST API development
* JWT authentication
* Frontend-backend integration
* Git & GitHub

```

## 🔮 Future Improvements

* Order tracking
* Restaurant/admin dashboard improvements
* Food search and filtering
* Ratings and reviews
* Email notifications
* Improved UI/UX

## 👨‍💻 Author

**Vikas Tyagi**

MERN Stack Developer | Full Stack Developer

GitHub: `@vikastyagi2004`

---

⭐ If you find this project useful, consider giving it a star!
