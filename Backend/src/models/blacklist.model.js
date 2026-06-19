import mongoose from "mongoose";

const blacklistSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true
  }
}, { timestamps: true });

const tokenBlacklistModel = mongoose.model("blacklistTokens", blacklistSchema);

export default tokenBlacklistModel;