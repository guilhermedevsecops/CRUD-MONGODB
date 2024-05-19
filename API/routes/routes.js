//Rotas 

const express = require("express");
const res = require("express/lib/response");
const routes = express.Router();
const admController = require("../controller/controller.admin");
const User = require("../model/user.model");

routes.get("/admin", admController.get);
routes.get("/admin/:id", admController.getID);
routes.post("/admin", admController.post);
routes.delete("/admin/:id", admController.delete);
routes.put("/admin/:id", admController.put);

module.exports = routes;
