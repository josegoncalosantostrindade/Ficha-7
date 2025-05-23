import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const urlAPI = "http://localhost:3000/filmes/listar";

const FilmeLista = () => {
  const [dataFilmes, setDataFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(""); 

  useEffect(() => {
    LoadFilmes();
  }, []);

  function LoadFilmes() {
    setLoading(true);
    axios
      .get(urlAPI)
      .then((res) => {
        if (res.data.success) {
          setDataFilmes(res.data.data);
        } else {
          setError("Erro no Serviço Web!");
        }
      })
      .catch((err) => {
        setError("Erro: " + err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (loading) {
    return <div className="container">Carregando filmes...</div>;
  }

  if (error) {
    return <div className="container text-danger">Erro: {error}</div>;
  }

  function OnDelete(id) {
    toast(
      (t) => (
        <div>
          <strong>Tens a certeza?</strong>
          <div className="mt-2">Não vai ser possível recuperar após eliminado!</div>
          <div className="mt-3 d-flex gap-2 justify-content-center">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => {
                toast.dismiss(t);
                SendDelete(id);
              }}
            >
              Sim, eliminar!
            </button>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => {
                toast.dismiss(t);
                toast.error("Cancelado. O teu filme está a salvo :)");
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      ),
      {
        duration: 10000,
        position: "top-center",
        closeButton: false,
        style: { minWidth: 320 },
      }
    );
  }

  function SendDelete(userId) {
    const baseUrl = `http://localhost:3000/filmes/eliminar/${userId}`;
    axios
      .delete(baseUrl)
      .then((response) => {
        if (response.data.success) {
          toast.success("O teu filme foi eliminado!");
          LoadFilmes();
        }
      })
      .catch(() => {
        toast.error("Erro ao eliminar filme");
      });
  }

  const filmesFiltrados = dataFilmes.filter(
    (data) =>
      data.title.toLowerCase().includes(search.toLowerCase()) ||
      data.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="mb-5">
        <input
          type="text"
          className="form-control"
          placeholder="Pesquisar por título ou descrição..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <h2>Lista de Filmes</h2>
      {filmesFiltrados.length === 0 ? (
        <p>Nenhum filme encontrado.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Título</th>
              <th scope="col">Descrição</th>
              <th scope="col">Foto</th>
              <th scope="col">Género</th>
              <th colSpan="2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filmesFiltrados.map((data, index) => (
              <tr key={index}>
                <th>{data.id}</th>
                <td>{data.title}</td>
                <td>{data.description}</td>
                <td>
                  {data.picture ? (
                    <img src={data.picture} alt={data.title} width="50" />
                  ) : (
                    "Sem imagem"
                  )}
                </td>
                <td>{data.Genero?.description || "Sem género"}</td>
                <td>
                  <Link
                    className="btn"
                    to={`/filmes/editar/${data.id}`}
                  >
                    Editar
                  </Link>
                </td>
                <td>
                  <button
                    className="btn"
                    onClick={() => OnDelete(data.id)}
                  >
                    Apagar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FilmeLista;