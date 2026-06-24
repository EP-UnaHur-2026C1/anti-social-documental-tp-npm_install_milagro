const mongoose = require("mongoose");

const FollowsSchema = new mongoose.Schema(
  {
    following_user_nickname: {
      type: String,
      required: true,
    },

    followed_user_nickname: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Follows", FollowsSchema);