const mongoose = require("mongoose");

const TagPostSchema = new mongoose.Schema(
  {
    tag_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
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

module.exports = mongoose.model("Tag_Post", TagPostSchema);v