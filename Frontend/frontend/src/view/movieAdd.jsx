import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";

const [dataFIlmes, setdataFilmes] = useState("");
const [campTitulo, setcampTitulo] = useState("");
const [campDescricao, setcampDescricao] = useState("");
const [campFoto, setcampFoto] = useState("");
const [campGenero, setcampGenero] = useState("");

const FilmeAdicionar = () => {
  return (
    <div>
      <div className="form-group row mb-3">
        <label htmlFor="name" className="col-sm-2 col-md-1 col-form-label">
          Título
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={campTitulo}
            onChange={(value) => setcampTitulo(value.target.value)}
          />
        </div>
      </div>
      <div className="form-group row mb-3">
        <label htmlFor="picture" className="col-sm-2 col-md-1 col-form-label">
          Imagem
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            placeholder="Picture"
            value={campFoto}
            onChange={(value) => setcampFoto(value.target.value)}
          />
        </div>
      </div>
      <div className="form-group row mb-3">
        <label htmlFor="description" className="col-sm-2 col-md-1 col-form-label">
          Descrição
        </label>
        <div className="col-sm-10">
          <textarea
            type="text"
            className="form-control"
            placeholder="Description"
            value={campDescricao}
            onChange={(value) => setcampDescricao(value.target.value)}
          />
        </div>
      </div>
      <button
      type="submit"
      className="btn btn-primary"
      onClick={() => SendSave()}
    >
      Save
    </button>
  </div>
)};

function SendSave() {
  e.preventDefault();
  const baseurl = "http://localhost:3000/filmes/criar";
        
  //Cria o objeto com os dados do filme 
  const datatpost = {
    titulo: campTitulo,
    descricao: campDescricao,
    foto: campFoto,
    genero: campGenero,
  };

  axios
  .post(baseUrl, datapost)
  .then((response) => {
    if (response.data.success === true) {
      alert(response.data.message);
    } else {
      alert(response.data.message);
    }
  })
  .catch((error) => {
    alert("Error 34 " + error);
  });
}


export default FilmeAdicionar;