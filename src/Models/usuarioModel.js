
const bcrypt = require("bcryptjs");
const { Schema } = require("mongoose");
const mongoose = require("../config/mongo");

const usuarioSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cpf: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    token: {
      type: String,
      select: false,
    },
    tokenExpires: {
      type: String,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

usuarioSchema.pre("save", async (next) => {
  const hashPass = await bcrypt.hash(this.password, 10);
  this.password = hashPass;
  next();
});

const usuarioModel = mongoose.model("Usuario", usuarioSchema);

module.exports = usuarioModel;
