var Filmes = require("../models/movie.js");
var Generos = require("../models/genre.js");
var sequelize = require("../models/database.js");

const controllers = {};

{
  /*}
//Sincroniza com a base de dados
sequelize
  .sync()
  .then(() =>
    console.log(
      "Sincronização com a base de dados realizada com sucesso! (géneros)"
    )
  )
  .catch((err) =>
    console.error("Erro ao sincronizar com a base de dados:", err)
  );
*/
}

//Listar todos os filmes
controllers.list = async (req, res) => {
  const data = await Filmes.findAll({
    include: [Generos],
  })
    .then(function (data) {
      console.log(`Listar os filmes: ${data}`);
      return data;
    })

    .catch((err) => {
      console.log(`Erro ao listar os filmes: ${err}`);
      return err;
    });
  res.json({ success: true, data: data });
};

//Criar um filme
controllers.create = async (req, res) => {
  // Verifica se req.body existe
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: "Corpo da requisição não fornecido",
    });
  }

  const { title, description, picture, generoId } = req.body;

  // Validação
  if (!title || !description) {
    return res.status(400).json({
      success: false,
      message: "Título e descrição são obrigatórios",
    });
  }

  try {
    const genero = await Generos.findByPk(generoId);
    if (!genero) {
      return res.status(400).json({
        success: false,
        message: "Género inválido",
      });
    }

    const data = await Filmes.create({
      title,
      description,
      picture,
      generoId,
    });
    console.log(`Criar filme: ${data}`);
    res.status(200).json({
      success: true,
      message: "Filme criado com sucesso!",
      data: data,
    });
  } catch (err) {
    console.log(`Erro ao criar filme: ${err}`);
    res.status(500).json({ success: false, message: "Erro ao criar filme" });
  }
};

//Encontrar um filme
controllers.get = async (req, res) => {
  const { id } = req.params;
  const data = await Filmes.findAll({
    where: { id: id },
    include: [Generos],
  })
    .then(function (data) {
      console.log(`Editar filme: ${data}`);
      return data;
    })
    .catch((err) => {
      console.log(`Erro ao editar filme: ${err}`);
      return err;
    });
  res.json({ success: true, data: data });
};

//Editar um filme
controllers.update = async (req, res) => {
  //encontrar o id
  const { id } = req.params;

  // parameter POST
  const { title, description, picture, generoId } = req.body;

  // Update data
  const data = await Filmes.update(
    {
      title: title,
      description: description,
      picture: picture,
      generoId: generoId,
    },
    {
      where: { id: id },
    }
  )
    .then(function (data) {
      console.log(`Atualizar filme: ${data}`);
      return data;
    })
    .catch((error) => {
      console.log(`Erro ao atualizar filme: ${error}`);
      return error;
    });
  res.json({ success: true, data: data, message: "Sucesso na edição" });
};

//Eliminar um filme
controllers.delete = async (req, res) => {
  //parâmetros por post
  const { id } = req.params;

  try {
    // Deleta o filme com o ID fornecido
    const del = await Filmes.destroy({
      where: { id: id },
    });

    if (del === 0) {
      return res.status(404).json({
        success: false,
        message: "Filme não encontrado",
      });
    }

    res.json({ success: true, message: "Filme eliminado com sucesso!" });
  } catch (err) {
    console.error(`Erro ao eliminar filme: ${err}`);
    res.status(500).json({
      success: false,
      message: "Erro ao eliminar filme",
    });
  }
};

module.exports = controllers;
