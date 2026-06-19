import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema(

  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },

    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "items",
      required: true,
    },
  },

  {
    timestamps: true,
  }

);

const Wishlist = mongoose.model(
  "wishlists",
  wishlistSchema
);

export default Wishlist;