const mongoose = require("mongoose");

const PostImageSchema = new mongoose.Schema(
  {
    url: String,

    post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post_image", PostImageSchema);