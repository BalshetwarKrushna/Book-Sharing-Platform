import express from "express";

import {
  addToWishlist,
  getWishlist,
  removeFromWishlist
} from "../controllers/wishlist.controller.js";

import { authUser } from "../middleware/auth.middleware.js";

const router = express.Router();


router.post(
  "/",
  authUser,
  addToWishlist
);

router.get(
  "/",
  authUser,
  getWishlist
);

router.delete(
  "/:id",
  authUser,
  removeFromWishlist
);


export default router;