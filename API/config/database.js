//Conexão com DB

const mongoose = require("mongoose");
require("dotenv").config();

connectionDb = function () {
  try {
    mongoose.connect(process.env.HOST_URL);
    console.log("conectado");
  } catch (err) {
    return console.log("Erro ao iniciar o banco de dados : " + err);
  }
};

module.exports = connectionDb();
