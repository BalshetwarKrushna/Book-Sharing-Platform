import express from "express";

import {
  createItem,
  getItems,
  getItemById,
  deleteItem,
  getMyItems
} from "../controllers/item.controller.js";

import { authUser } from "../middleware/auth.middleware.js";

import upload from "../middleware/upload.js";

const router = express.Router();


// 🌍 PUBLIC ROUTES

router.get("/", getItems);

router.get(
  "/my-items",
  authUser,
  getMyItems
);

router.get("/:id", getItemById);


// 🔒 PRIVATE ROUTES

router.post(
  "/",
  authUser,
  upload.single("image"),
  createItem
);

router.delete(
  "/:id",
  authUser,
  deleteItem
);


export default router;