const User = require("../model/user.model");

module.exports = {
  //Lista todos o usuarios
  get: async (req, res) => {
    try {
      const usuarios = await User.find();

      return res.status(200).json(usuarios);
    } catch (err) {
      return res.status(408).json("Erro ao carregar os usuarios");
    }
  },
  //lista o usuário pelo id
  getID: async (req, res) => {
    try {
      const url = req.params.id;
      id = url;
      const UserId = await User.findOne({ _id: id });
      return res.status(200).json({ UserId });
    } catch (err) {
      return res.status(408).json({ message: "Erro ao carregar usuario" });
    }
  },
  //Cria um usuario
  post: async (req, res) => {
    try {
      const cadUsuario = await User.create({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
      });
      return res.status(201).json({ message: "Usuário Criado com sucesso" });
    } catch (err) {
      return res.status(500).json({ message: "Falha ao criar usuário" });
    }
  },
  //Atualizar usuário
  put: async (req, res) => {
    try {
      const url = req.params.id;

      id = url;

      const Atualizar = await User.updateOne(
        { _id: id },
        {
          email: req.body.email,
          password: req.body.password,
          name: req.body.name,
        }
      );

      res.status(200).json({ message: "Usuario atualizado com sucesso" });
    } catch {
      return res.status(500).json({ message: "Falha ao atualizar usuário" });
    }
  },
  //Deleta um usuário
  delete: async (req, res) => {
    try {
      const url = req.params.id;
      idForDelete = url;

      const Deletar = await User.deleteOne({ _id: idForDelete });

      return res.status(200).json({ message: "Usuário deletado com sucesso" });
    } catch (err) {
      return res.status(500).json({ message: "Falha ao deletar usuário" });
    }
  },

};
