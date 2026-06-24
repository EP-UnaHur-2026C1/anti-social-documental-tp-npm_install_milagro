const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    user_nickname: {
      type: String,
      required: true,
    },
    text: String,
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);