const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    user_nickname: {
      type: String,
      required: [true, "El campo user_nickname es obligatorio"],
      trim: true
    },
    text: {
        type: String,
        required: [true, "El campo text es obligatorio"],
        trim: true
    },
    description: {
      type: String,
      trim: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);