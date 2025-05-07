import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

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
            id="title"
            placeholder="Title"
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
            id="picture"
            placeholder="Picture"
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
            id="description"
            placeholder="Description"
          />
        </div>
      </div>

      {/*<div className="form-group row mb-3">
        <label htmlFor="role" className="col-sm-2 col-md-1 col-form-label">
          Foto
        </label>
        <div className="col-sm-10">
          <select id="role" className="form-control">
            <option defaultValue>Choose...</option>
            <option value="1">Admin</option>
            <option value="2">Project Manager</option>
            <option value="3">Programmer</option>
          </select>
        </div>
      </div>
      <div className="form-group row mb-3">
        <label
          htmlFor="phone"
          className="col-sm-2 col-md-1 col-form-label"
        >
          Phone
        </label>
        <div className="col-sm-6">
          <input
            className="form-control"
            id="phone"
            type="number"
            placeholder="phone"
          />
        </div>
      </div>
      <div className="form-group row mb-3">
        <label
          htmlFor="address"
          className="col-sm-2 col-md-1 col-form-label"
        >
          Address
        </label>
        <div className="col-sm-10">
          <textarea
            className="form-control"
            id="address"
            rows="3"
            placeholder="1234 Main St"
          ></textarea>
        </div>
      </div>*/}
      
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </div>
  );
};


export default FilmeAdicionar;