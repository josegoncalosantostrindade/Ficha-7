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
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Estado de erro

  useEffect(() => {
    LoadFilmes();
  }, []);

  function LoadFilmes() {
    setLoading(true); // Inicia o carregamento
    axios
      .get(urlAPI)
      .then((res) => {
        console.log("Resposta da API:", res.data);
        if (res.data.success) {
          setDataFilmes(res.data.data);
          console.log("Dados sem dados em dataFilmes:", res.data.data);
        } else {
          setError("Erro no Serviço Web!");
        }
      })
      .catch((err) => {
        console.error("Erro na requisição:", err);
        setError("Erro: " + err.message);
      })
      .finally(() => {
        setLoading(false); // Finaliza o carregamento
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
    //url do backend
    const baseUrl = `http://localhost:3000/filmes/eliminar/${userId}`;
    
    //network
    axios
      .delete(baseUrl, {
        id: userId,
      })
      .then((response) => {
        if (response.data.success) {
          Swal.fire("Eliminado!", "O teu filme doi eliminado", "success");
          LoadFilmes();
        }
      })
      .catch((error) => {
        alert("Erro 325 ");
      });
  }

  return (
    <div className="container">
      <h2>Lista de Filmes</h2>
      {dataFilmes.length === 0 ? (
        <p>Nenhum filme encontrado.</p>
      ) : (
        <table className="table table-hover table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Título</th>
              <th scope="col">Descrição</th>
              <th scope="col">Foto</th>
              <th scope="col">Gênero</th>
              <th colSpan="2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {dataFilmes.map((data, index) => (
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
                <td>{data.Genero?.description || "Sem gênero"}</td>
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
                    class="btn btn-outline-danger"
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
