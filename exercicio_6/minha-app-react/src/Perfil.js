/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import fotoPerfil from './assets/img/joao-perfil.jpg'

function Perfil() {
  return (
    <div>
      <header className="text-center my-4">
        <h1>Perfil</h1>
      </header>

      {/* Card do perfil */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card-person card text-center">
              <img
                src={fotoPerfil}
                className="card-img-top"
                alt="Foto de João Vitor Medeiros" 
              />
              <div className="card-body">
                <h5 className="card-title">João Vitor Medeiros</h5>
                <p className="card-text">
                  Jovem programador em busca de entrar no mercado e construir uma carreira de sucesso!!!
                </p>
                <a href="#" className="btn btn-primary w-50">
                  Seguir
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center my-4">
        <p>&copy; 2024 João Vitor</p>
      </footer>
    </div>
  );
}

export default Perfil;
