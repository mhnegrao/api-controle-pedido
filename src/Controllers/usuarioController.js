class UsuarioController {
  index = (req, res) => {
    console.log("Exibe todos usuarios");
    res.send({ message: "Exibe todos usuarios" });
  };
  show = (req, res) => {
    console.log("Exibe un usuario");
    res.send({ message: "Exibe um usuario" });
  };
  store = (req, res) => {
    console.log("usuário Cadastrado");
    res.send({ message: "Usuário Cadstrado" });
  };
  update = (req, res) => {
    console.log("Usuário Atualizado");
    res.send({ message: "Usuário Atualizado" });
  };
  delete = (req, res) => {
    console.log("Usuário excluído");
    res.send({ message: "Usuário excluido" });
  };
}

module.exports = new UsuarioController();
