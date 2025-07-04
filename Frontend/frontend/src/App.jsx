import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import FilmeLista from "./view/movieList";
import FilmeAdicionar from "./view/movieAdd";
import FilmeEditar from "./view/movieEdit";
import { Toaster } from "sonner";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster />
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Filmes
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/filmes/adicionar"
                  >
                    Adicionar Filme
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container py-4">
          <Routes>
            <Route path="/" element={<FilmeLista />} />
            <Route path="/filmes/adicionar" element={<FilmeAdicionar />} />
            <Route path="/filmes/editar/:filmeId" element={<FilmeEditar />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;