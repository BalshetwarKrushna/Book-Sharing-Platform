import express from "express";
import {
  sendRequest,
  getRequestsForOwner,
  acceptRequest,
  getMyRequests
} from "../controllers/request.controller.js";

import { authUser } from "../middleware/auth.middleware.js";

const router = express.Router();

// ✅ Send request
router.post("/", authUser, sendRequest);

// ✅ Owner view requests
router.get("/owner", authUser, getRequestsForOwner);

router.get(
  "/my-requests",
  authUser,
  getMyRequests
);
// ✅ Accept request
router.put("/:id/accept", authUser, acceptRequest);

export default router;