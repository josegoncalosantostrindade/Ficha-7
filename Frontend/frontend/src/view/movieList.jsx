import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
    Swal.fire({
      title: "Tens a certeza?",
      text: "Não vai ser possível recuperar após eliminado!",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim, eliminar!",
      cancelButtonText: "Não",
    }).then((result) => {
      if (result.value) {
        SendDelete(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "O teu filme está a salvo :)", "error");
      }
    });
  }

  function SendDelete(userId) {
    const baseUrl = `http://localhost:3000/filmes/eliminar/${userId}`;
    axios
      .delete(baseUrl)
      .then((response) => {
        if (response.data.success) {
          Swal.fire("Eliminado!", "O teu filme foi eliminado", "success");
          LoadFilmes();
        }
      })
      .catch(() => {
        alert("Erro ao eliminar filme");
      });
  }

  // Filtra os filmes conforme o texto da barra de pesquisa
  const filmesFiltrados = dataFilmes.filter(
    (data) =>
      data.title.toLowerCase().includes(search.toLowerCase()) ||
      data.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Lista de Filmes</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Pesquisar por título ou descrição..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {filmesFiltrados.length === 0 ? (
        <p>Nenhum filme encontrado.</p>
      ) : (
        <table className="table table-hover table-striped">
          <thead className="thead-dark">
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
                    className="btn btn-outline-info"
                    to={`/filmes/editar/${data.id}`}
                  >
                    Editar
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
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