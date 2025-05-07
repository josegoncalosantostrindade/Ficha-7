import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//Importa o modelo de género
const urlAPI = "http://localhost:3000/filmes/listar";

const FilmeLista = () => {
  return (
    <table
      className="table table-hover table-striped"
    >
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
      </tbody>
    </table>
  );
};

export default FilmeLista;
