import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//Importa o modelo de género
const urlAPI = "http://localhost:3000/filmes/listar";

const FilmeLista = () => {
  // Define o estado inicial do array de filmes
  const [dataFilmes, setdataFilmes] = useState([]);
  useEffect(() => {
    LoadFilmes();
  }, []);

  //Função para carregar a lista de filmes
  function LoadFilmes() {
      const url = 'http://localhost:3000/filmes/listar';
      axios.get(url)
        .then((res) => {
          if(res.data.success) {
            const data = res.data.data;
            setdataFilmes(data);
          } else {
            alert('Erro no Serviço Web!');
          }
        })
        .catch((err) => {{
          alert(err);
        }})

  }

  return (
    <table className="table table-hover table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Título</th>
          <th scope="col">Descrição</th>
          <th scope="col">Foto</th>
          <th scope="col">Género</th>
          <th colSpan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>Title</td>
          <td>Description</td>
          <td>Picture</td>
          <td>Genre</td>
          <td>
            <button className="btn btn-outline-info "> Editar</button>
          </td>
          <td>
            <button className="btn btn-outline-danger "> Apagar</button>
          </td>
        </tr>
        <LoadFillData />
      </tbody>
    </table>
  );

  //Função para carregar os dados dos filmes
  function LoadFillData() {
    return dataFilmes.map((data, index) => {º
      return (
        <tr key={index}>
          <th>{data.id}</th>
          <td>{data.titulo}</td>
          <td>{data.descricao}</td>
          <td>{data.foto}</td>
          <td>{data.genero}</td>
          <td>
            <Link className="btn btn-outline-info">Edit</Link>
          </td>
          <td>
            <button className="btn btn-outline-danger">Apagar</button>
          </td>
        </tr>
      );
    });
  }
};

export default FilmeLista;
