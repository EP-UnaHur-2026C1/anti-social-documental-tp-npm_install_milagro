const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    nickname: {
      type: String,
      required: [true, "El campo nickname es obligatorio"],
      trim: true,
      unique: true,
    },
    seguidores: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "El campo user_nickname es obligatorio"],
      trim: true
    }],
    seguidos: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "El campo user_nickname es obligatorio"],
      trim: true
    }]

  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);