import React from "react";
import "./PainelAdmin.css";
import { Link } from 'react-router-dom';

function PainelAdmin() {
  return (
    <div className="paineladmin">
      <div className="paineladmin-container">
        <div className="paineladmin-conteudo">
          <div className="paineladmin-title">
            <div className="paineladmin-title-line"></div>
            <p className="paineladmin-title-p">Painel do Administrador</p>
          </div>

          <div className="paineladmin-opcoescontainer">
            <div className="paineladmin-opcoescontainer-linha1">
              <Link to='/removerconteudo' className='paineladmin-bloco-links'>
                <div className="paineladmin-bloco1">
                  <div className="paineladmin-bloco1-img"></div>
                  <p className="paineladmin-bloco1-p">Remover Conteúdo</p>
                </div>
              </Link>
              <Link to='/removerusuarios' className='paineladmin-bloco-links'>
                <div className="paineladmin-bloco1">
                  <div className="paineladmin-bloco2-img"></div>
                  <p className="paineladmin-bloco1-p">Remover Usuário</p>
                </div>
              </Link>
              <Link to='/' className='paineladmin-bloco-links'>
                <div className="paineladmin-bloco1">
                  <div className="paineladmin-bloco3-img"></div>
                  <p className="paineladmin-bloco1-p">Sair</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PainelAdmin;
