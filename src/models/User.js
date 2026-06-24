const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    nickname: {
      type: String,
      required: [true, "El campo nickname es obligatorio"],
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);