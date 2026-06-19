import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./src/config/database.js";

import authRoutes from "./src/routes/auth.routes.js";
import itemRoutes from "./src/routes/item.routes.js";
import requestRoutes from "./src/routes/request.routes.js";
import wishlistRoutes from "./src/routes/wishlist.routes.js";
dotenv.config();

const app = express();

// ✅ CORS
app.use(cors());

// ✅ Middleware
app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api/wishlist", wishlistRoutes);
// ✅ Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5001;

// ✅ Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});