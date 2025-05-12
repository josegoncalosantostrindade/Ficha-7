import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";

const FilmeAdicionar = () => {
  const [campTitulo, setCampTitulo] = useState("");
  const [campDescricao, setCampDescricao] = useState("");
  const [campFoto, setCampFoto] = useState("");
  const [campGenero, setCampGenero] = useState("");

  function SendSave(e) {
    e.preventDefault();
    const baseUrl = "http://localhost:3000/filmes/criar";

    // Cria o objeto com os dados do filme
    const datapost = {
      title: campTitulo,
      description: campDescricao,
      picture: campFoto,
      generoId: parseInt(campGenero), // Converte para número
    };

    axios
      .post(baseUrl, datapost, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.success) {
          alert(response.data.message);
          // Limpa o formulário após sucesso
          setCampTitulo("");
          setCampDescricao("");
          setCampFoto("");
          setCampGenero("");
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        alert("Erro: " + error.message);
      });
  }

  return (
    <div className="container">
      <h2>Adicionar Filme</h2>
      <form onSubmit={SendSave}>
        <div className="form-group row mb-3">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Título
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Título"
              value={campTitulo}
              onChange={(e) => setCampTitulo(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="description" className="col-sm-2 col-form-label">
            Descrição
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="description"
              placeholder="Descrição"
              value={campDescricao}
              onChange={(e) => setCampDescricao(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="picture" className="col-sm-2 col-form-label">
            Imagem
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="picture"
              placeholder="URL da imagem"
              value={campFoto}
              onChange={(e) => setCampFoto(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="genero" className="col-sm-2 col-form-label">
            Gênero
          </label>
          <div className="col-sm-10">
            <select
              className="form-control"
              id="genero"
              value={campGenero}
              onChange={(e) => setCampGenero(e.target.value)}
              required
            >
              <option value="">Selecione um género</option>
              <option value="1">Comédia</option>
              <option value="2">Ação</option>
              <option value="3">Violência</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default FilmeAdicionar;