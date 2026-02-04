import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados'; // Certifique-se de ter criado este arquivo!
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      {/* Menu Superior do Bootstrap */}
      <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Catálogo</Link>
            </li>
            <li className="nav-item">
              <Link to="/novo" className="nav-link">Novo</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Definição de para onde cada clique leva */}
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/novo" element={<LivroDados />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;