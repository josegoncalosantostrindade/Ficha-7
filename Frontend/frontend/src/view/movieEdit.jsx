import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//URL base para o API
const baseUrl = "http://localhost:3000/";

const FilmeEditar = () => {
  const [dataFilmes, setdataFilmes] = useState("");
  const [campTitulo, setcampTitulo] = useState("");
  const [campDescricao, setcampDescricao] = useState("");
  const [campFoto, setcampFoto] = useState("");
  const [stringGenero, setstringGenero] = useState("");
  const [selectGenero, setselectGenero] = useState("");
  const { filmeId } = useParams();

  //console.log(movieId);
  useEffect(() => {
    const url = baseUrl + "/filmes/get/" + filmeId;
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data[0];
          setdataFilmes(data);
          setcampTitulo(data.titulo);
          setcampDescricao(data.descricao);
          setcampFoto(data.foto);
          setstringGenero(data.genero.genero);
          setselectGenero(data.generoId);
          console.log(JSON.stringify(data.role.role));
        } else {
          alert("Erro no Serviço Web");
        }
      })
      .catch((error) => {
        alert("Erro no servidor: " + error);
      });
  }, []);

  function SendUpdate() {
    // url de backend
    const url = baseUrl + "/filmes/editar/" + filmeId;
    
    const datapost = {
      titulo: campTitulo,
      descricao: campDescricao,
      foto: campFoto,
      genero: selectGenero,
    };
    axios
      .post(url, datapost)
      .then((response) => {
        if (response.data.success === true) {
          alert(response.data.message);
        } else {
          alert("Erro");
        }
      })
      .catch((error) => {
        alert("Erro 34 " + error);
      });
  }

  return (
    <div>
      <div className="form-row justify-content-center">
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Título</label>
          <input
            type="text"
            className="form-control"
            placeholder="What is the movie title?"
            value={campTitulo}
            onChange={(value) => setcampTitulo(value.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Descrição</label>
          <input
            type="text"
            className="form-control"
            placeholder="What is the movie about?"
            value={campDescricao}
            onChange={(value) => setcampEmail(value.target.value)}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputState">Género</label>
          <select
            id="inputState"
            className="form-control"
            onChange={(value) => setstringRole(value.target.value)}
          >
            <option value={selectGenero}>{stringGenero}</option>
            <option value="1">Comédia</option>
            <option value="2">Ação</option>
            <option value="3">Violência</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Foto</label>
          <input
            type="link"
            className="form-control"
            placeholder="WHat is the movie banner link?"
            value={campPhone}
            onChange={(value) => setcampFoto(value.target.value)}
          />
        </div>
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        onClick={() => SendUpdate()}
      >
        Update
      </button>
    </div>
  );
};

export default FilmeEditar;
