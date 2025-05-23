import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const FilmeAdicionar = () => {
  const [campTitulo, setCampTitulo] = useState("");
  const [campDescricao, setCampDescricao] = useState("");
  const [campFoto, setCampFoto] = useState("");
  const [campGenero, setCampGenero] = useState("");
  const [generos, setGeneros] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/genero/listar")
      .then((res) => {
        if (res.data.success) setGeneros(res.data.data);
      })
      .catch(() => setGeneros([]));
  }, []);

  function SendSave(e) {
    e.preventDefault();
    const baseUrl = "http://localhost:3000/filmes/criar";

    const datapost = {
      title: campTitulo,
      description: campDescricao,
      picture: campFoto,
      generoId: parseInt(campGenero),
    };

    axios
      .post(baseUrl, datapost, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.success) {
          toast.success("Filme adicionado com sucesso!");
          setCampTitulo("");
          setCampDescricao("");
          setCampFoto("");
          setCampGenero("");
          navigate("/");
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        toast.error("Erro: " + error.message);
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
            {campFoto && (
              <div className="mt-2">
                <img
                  src={campFoto}
                  alt="Preview"
                  style={{ maxWidth: "150px", maxHeight: "150px", border: "1px solid #ccc" }}
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              </div>
            )}
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="genero" className="col-sm-2 col-form-label">
            Género
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
              {generos.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.description}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button type="submit" className="btn">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default FilmeAdicionar;