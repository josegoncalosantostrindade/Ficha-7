import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//URL base para o API
const baseUrl = "http://localhost:3000/";

const FilmeEditar = () => {
  const { filmeID } = useParams();
  return (
    <div>
      <div className="form-row justify-content-center">
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Título</label>
          <input type="text" className="form-control" placeholder="Title" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Imagem</label>
          <input type="text" className="form-control" placeholder="Picture" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Descrição</label>
          <textarea type="text" className="form-control" placeholder="Description" />
        </div>{" "}
      </div>

      {/*<div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputState">Role</label>
          <select id="inputState" className="form-control">
            <option value="1">Admin</option>
            <option value="2">Project Manager</option>
            <option value="3">Programer</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Phone</label>
          <input type="number" className="form-control" placeholder="Phone" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputAddress">Address</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>*/}

      <button type="submit" className="btn btn-primary">
        Update
      </button>
    </div>
  );
};

export default FilmeEditar;