# 🍴 Food Delivery App

This is a **Food Delivery Web Application** containing three parts:  
- **Frontend** (React + Vite)  
- **Backend** (Node.js + Express + MongoDB or any DB)  
- **Admin Panel** (React for managing products, orders, users, etc.)  

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
# Clone the repo from GitHub
git clone https://github.com/Ritesh-Git-Hub/Food-Delivery.git

# Move into the project root folder
cd Food-Delivery
```

---

### 2️⃣ Backend Setup
```bash
# Move into backend folder
cd backend

# Install all backend dependencies (listed in package.json)
npm install
```

- Create a `.env` file inside the `backend` folder:
```env
PORT=4000                    # Port number for backend server (defined in server.js)
MONGO_URI=your_mongodb_url   # Replace with your MongoDB connection string
JWT_SECRET=your_secret_key   # Secret key for authentication
```

```bash
# Run the backend server
node server.js
```

👉 Backend runs at: `http://localhost:4000`

---

### 3️⃣ Admin Panel Setup (Run this first)
```bash
# Move into admin folder
cd ../admin

# Install admin panel dependencies
npm install

# Run the admin panel
npm run dev
```

👉 Admin panel runs at: `http://localhost:5173`

---

### 4️⃣ Frontend Setup
```bash
# Go back to root and enter frontend folder
cd ../frontend

# Install frontend dependencies
npm install

# Run the frontend using Vite
npm run dev
```

👉 Frontend runs at: `http://localhost:5174`

---

## 📂 Project Structure
```
Food-Delivery/
│── admin/        # Admin Panel (React + Vite)
│── backend/      # Backend (Node.js, Express, MongoDB)
│── frontend/     # User Frontend (React + Vite)
│── .gitignore
│── README.md
```

---

## 🔑 Features
- User authentication (login/register)  
- Browse and order food items  
- Payment & order tracking  
- Admin dashboard for managing food items & orders  

---

## 🛠️ Tech Stack
- **Frontend:** React, Vite, CSS  
- **Backend:** Node.js, Express, MongoDB  
- **Admin:** React, Vite  
- **Authentication:** JWT  

---

## ▶️ Running All Together (Recommended Order)
```bash
# 1. Start Admin Panel first
cd admin
npm run dev

# 2. Start Frontend (User Website)
cd ../frontend
npm run dev

# 3. Start Backend
cd ../backend
node server.js
```

👉 Now you can access:  
- **Admin Panel:** `http://localhost:5173`  
- **Frontend (User Site):** `http://localhost:5174`  
- **Backend API:** `http://localhost:4000`  

---


