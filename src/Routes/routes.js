const router = require("express").Router();
const cors = require("cors");

const usuarioController = require("../Controllers/usuarioController");
const loginController = require("../Controllers/loginController");
const userController = require("../Controllers/usuarioController");

configureRoutes();
module.exports = router;

function configureRoutes() {
  router.use(cors());
  router.get("/", (req, res) => {
    res.send({ message: "Api Ativa" });
  });
  router.get("/user", usuarioController.index);
  router.get("/user/:id", usuarioController.show);
  router.post("/user", usuarioController.store);
  router.put("/user/:id", usuarioController.update);
  router.delete("/user", usuarioController.delete);

  //autenticação
  loginRoutes();
  
}

function loginRoutes() {
  router.get("/login", (req, res) => {
    res.send({ message: "Login Area..." });
  });
  router.post("/login", loginController.make);
}

