const mongoose = require("mongoose");

const PostImageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: [true, "El campo url es obligatorio"],
      trim: true
    },

    post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: [true, "El campo post_id es obligatorio"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post_image", PostImageSchema);