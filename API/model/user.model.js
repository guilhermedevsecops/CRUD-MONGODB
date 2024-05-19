//Model de criação tabela com atributos

const mongoose = require("mongoose");

module.exports = mongoose.model("Users", {
  email: String,
  password: String,
  name: String,
});
