const mongoose = require("mongoose");

const FollowsSchema = new mongoose.Schema(
  {
    following_user_nickname: {
      type: String,
      required: [true, "El campo following_user_nickname es obligatorio"],
      trim: true
    },

    followed_user_nickname: {
      type: String,
      required: [true, "El campo followed_user_nickname es obligatorio"],
      trim: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Follows", FollowsSchema);