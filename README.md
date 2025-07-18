# 🚍 Shuttle Management System

A comprehensive full-stack web application for managing university shuttle services, student bookings, and wallet point allocations.

---

## ✨ Features

- 🔐 **User Authentication** (Student & Admin Roles)
- 🗺️ **Route and Stop Management** (Admin)
- 🚌 **Shuttle Booking System** (Student)
- 💰 **Student Wallet System** (with points allocation & bonuses)
- 📊 **Admin Dashboard** for full management control

---

## ⚙️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Axios, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JWT-based login system
- **Admin Panel**: Custom-built with full access control
- **Tools**: Postman, Git, MongoDB Compass

---

## 📁 Folder Structure
```bash
shuttle-management-system/
├── backend/ # Express API with MongoDB
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── config/
├── frontend/ # React frontend
│ ├── components/
│ ├── pages/
│ └── services/
└── README.md
```


## ⚙️ Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)
- Git

---

### 🚀 Installation

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd shuttle-management-system

---
cd backend
npm install

cd ../frontend
npm install

```

# ✨ Features – Shuttle Management System

- 🔐 **User Authentication**  
  - Separate logins for Students and Admins  
  - Secure session handling

- 🚌 **Shuttle Booking System**  
  - Students can book shuttle rides based on route and time  
  - View upcoming bookings

- 🗺️ **Route and Stop Management**  
  - Admin can create, update, and delete routes and stops  
  - Stops categorized by type and location

- 💳 **Student Wallet System**  
  - Each student has a wallet with points  
  - Points can be allocated monthly, per semester, or on-demand

- 📊 **Admin Dashboard**  
  - Overview of all students, bookings, wallets  
  - Search and filter capabilities for managing large data sets

- 📍 **Location-Based Stop Suggestions** *(optional/extendable)*  
  - Suggest stops based on user location (future scope)

- 🎉 **Event Bonus Point Allocation**  
  - Admin can assign bonus points during festivals or special events

- 🔎 **Student Search & Filter Tools**  
  - Easily find student details with live search/filter

---

