const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    text: String,
    is_visible: Boolean,

    user_nickname: {
      type: String,
      required: true,
    },

    post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);