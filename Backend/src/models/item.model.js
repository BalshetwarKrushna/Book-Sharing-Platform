import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  category: {
    type: String,
    enum: ["book", "electronics", "furniture", "notes"],
    required: true
  },

  price: {
    type: Number,
    required: true,
    min: 0
  },
  priceType: {
    type: String,
    enum: ["fixed", "negotiable", "free"],
    default: "fixed"
  },

  condition: {
    type: String,
    enum: ["new", "like_new", "used", "poor"],
    default: "used"
  },

  image: {
  type: String
},

  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true
  },

  location: {
    type: String,
    required: true
  },

  status: {
    type: String,
    enum: ["available", "reserved", "sold"],
    default: "available"
  },

  expiryDate: {
    type: Date
  }
  ,
  image: {
  type: String
}

}, { timestamps: true });

const Item = mongoose.model("items", itemSchema);
export default Item;