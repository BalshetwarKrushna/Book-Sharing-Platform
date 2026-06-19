import mongoose from "mongoose";

const requestSchema = new mongoose.Schema(

  {
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "items",
      required: true
    },

    // Buyer

    requesterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true
    },

    // Seller

    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true
    },

    status: {
      type: String,

      enum: [
        "pending",
        "accepted",
        "rejected"
      ],

      default: "pending"
    },

    // Optional buyer message

    message: {
      type: String,
      default: ""
    }

  },

  {
    timestamps: true
  }

);

const Request = mongoose.model(
  "requests",
  requestSchema
);

export default Request;