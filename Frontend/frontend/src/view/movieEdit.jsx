import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const baseUrl = "http://localhost:3000";

const FilmeEditar = () => {
  const [campTitulo, setCampTitulo] = useState("");
  const [campDescricao, setCampDescricao] = useState("");
  const [campFoto, setCampFoto] = useState("");
  const [campGenero, setCampGenero] = useState("");
  const [generos, setGeneros] = useState([]);
  const { filmeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const url = `${baseUrl}/filmes/get/${filmeId}`;
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setCampTitulo(data.title);
          setCampDescricao(data.description);
          setCampFoto(data.picture || "");
          setCampGenero(data.generoId ? data.generoId.toString() : "");
        } else {
          toast.error("Erro no Serviço Web");
        }
      })
      .catch((error) => {
        toast.error("Erro no servidor: " + error.message);
      });
  }, [filmeId]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/genero/listar`)
      .then((res) => {
        if (res.data.success) setGeneros(res.data.data);
      })
      .catch(() => setGeneros([]));
  }, []);

  function SendUpdate(e) {
    e.preventDefault();
    const url = `${baseUrl}/filmes/editar/${filmeId}`;

    const datapost = {
      title: campTitulo,
      description: campDescricao,
      picture: campFoto,
      generoId: parseInt(campGenero),
    };

    axios
      .put(url, datapost, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.success) {
          toast.success("Filme editado com sucesso!");
          navigate("/");
        } else {
          toast.error("Erro: " + response.data.message);
        }
      })
      .catch((error) => {
        toast.error("Erro: " + error.message);
      });
  }

  return (
    <div className="container">
      <h2>Editar Filme</h2>
      <form onSubmit={SendUpdate}>
        <div className="form-group mb-3">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Título do filme"
            value={campTitulo}
            onChange={(e) => setCampTitulo(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Descrição</label>
          <textarea
            className="form-control"
            id="description"
            placeholder="Sobre o filme"
            value={campDescricao}
            onChange={(e) => setCampDescricao(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="picture">Foto</label>
          <input
            type="text"
            className="form-control"
            id="picture"
            placeholder="URL da imagem"
            value={campFoto}
            onChange={(e) => setCampFoto(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="genero">Género</label>
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
        <button type="submit" className="btn">
          Atualizar
        </button>
      </form>
    </div>
  );
};

export default FilmeEditar;