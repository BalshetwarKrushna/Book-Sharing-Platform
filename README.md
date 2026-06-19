# Book-Sharing-Platform
# 🎓 CampusMart - Student Marketplace

CampusMart is a MERN stack web application that allows college students to buy, sell and exchange student essentials within their campus community.

Students can list books, electronics, notes, hostel essentials, cycles and other products. Buyers can search items, add them to wishlist, send purchase requests and contact sellers after request approval.

---

## 🚀 Features

### 🔐 Authentication

- User Registration
- User Login
- Logout
- Protected Routes
- User Profile Authentication

### 🏠 Home Page

- Modern Landing Page
- Buy Section
- Sell Section
- Website Features
- Interactive UI

### 🛒 Marketplace

- Search Items
- Category Filtering
- Location Filtering
- View Item Details
- Modern Item Cards

### 💰 Seller Features

- Add New Item
- Upload Image from Device
- View My Listings
- Delete Listings
- View Buyer Requests
- Accept Buyer Requests
- Automatically Mark Item as Sold

### 🛍 Buyer Features

- Browse Marketplace
- Add to Wishlist
- Send Request to Seller
- Track Request Status
- View Seller Contact After Approval

### ❤️ Wishlist

- Add Item to Wishlist
- View Wishlist
- Remove Item from Wishlist

### 📄 Additional Pages

- About Page
- Contact Page

---

## 🛠 Tech Stack

### Frontend

- React.js
- React Router DOM
- CSS3
- Axios

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- JWT
- Cookies

### Image Upload

- Multer
- Cloudinary

---

## 📂 Project Structure

```
CampusMart

├── Frontend
│
├── src
│
├── api
│
├── components
│   ├── Navbar
│   ├── HeroSection
│   ├── Feature
│   ├── ItemCard
│   ├── RegisterForm
│   └── ProtectedRoute
│
├── pages
│   ├── Home
│   ├── Login
│   ├── Register
│   ├── Marketplace
│   ├── SellDashboard
│   ├── ItemDetails
│   ├── Wishlist
│   ├── MyListings
│   ├── MyRequests
│   ├── SellingRequests
│   ├── About
│   └── Contact
│
└── App.jsx


Backend

├── config
│   └── cloudinary.js
│
├── controllers
│   ├── auth.controller.js
│   ├── item.controller.js
│   ├── request.controller.js
│   └── wishlist.controller.js
│
├── middleware
│   ├── auth.middleware.js
│   └── upload.js
│
├── models
│   ├── user.model.js
│   ├── item.model.js
│   ├── request.model.js
│   └── wishlist.model.js
│
├── routes
│   ├── auth.routes.js
│   ├── item.routes.js
│   ├── request.routes.js
│   └── wishlist.routes.js
│
└── server.js
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/CampusMart.git

cd CampusMart
```

---

### Backend Setup

```bash
cd Backend

npm install

npm run server
```

---

### Frontend Setup

```bash
cd Frontend

npm install

npm run dev
```

---

## 🔑 Environment Variables

Create `.env` file inside Backend folder.

```env
PORT=5001

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🔗 API Endpoints

### Auth

```txt
POST /api/auth/register

POST /api/auth/login

GET /api/auth/logout

GET /api/auth/get-me
```

### Items

```txt
POST /api/items

GET /api/items

GET /api/items/:id

GET /api/items/my-items

DELETE /api/items/:id
```

### Requests

```txt
POST /api/requests

GET /api/requests/owner

GET /api/requests/my-requests

PUT /api/requests/:id/accept
```

### Wishlist

```txt
POST /api/wishlist

GET /api/wishlist

DELETE /api/wishlist/:id
```

---

## 🔮 Future Enhancements

- User Profile Page
- Dashboard Analytics
- Real-time Chat
- Notifications
- Product Ratings
- Pagination
- Dark Mode

---


