import React from 'react';
import './PainelUser.css';
import { Link } from 'react-router-dom';

function PainelUser() {
  return (
    <div className='paineluser'>
        <div className='paineluser-container'>
          <div className='paineluser-conteudo'>
              <div className='paineluser-title'>
                  <div className='paineluser-title-line'></div>
                  <p className='paineluser-title-p'>Painel do Usuário</p>
              </div>

              <div className='paineluser-opcoescontainer'>

                  <div className='paineluser-opcoescontainer-linha1'>
                    <Link to='/postarnoticia' className='paineluser-bloco-links'>
                      <div className='paineluser-bloco1'>
                        <div className='paineluser-bloco1-img'></div>
                        <p className='paineluser-bloco1-p'>Postar Notícia</p>
                      </div>
                    </Link>
                    <Link to='/postarvaga' className='paineluser-bloco-links'>
                      <div className='paineluser-bloco1'>
                        <div className='paineluser-bloco2-img'></div>
                        <p className='paineluser-bloco1-p'>Postar Vaga</p>
                      </div>
                    </Link>
                    <Link to='/postarclas' className='paineluser-bloco-links'>
                      <div className='paineluser-bloco1'>
                       <div className='paineluser-bloco3-img'></div>
                        <p className='paineluser-bloco1-p'>Postar Classificado</p>
                      </div>
                    </Link>

                  </div>

                   {/* LINHA 2  */}

                  <div className='paineluser-opcoescontainer-linha1'>
                    <Link to='/postarproj' className='paineluser-bloco-links'>
                      <div className='paineluser-bloco1'>
                        <div className='paineluser-bloco4-img'></div>
                        <p className='paineluser-bloco1-p'>Postar Projeto</p>
                      </div>
                    </Link>
                    <Link to='/editarinfos' className='paineluser-bloco-links'>
                      <div className='paineluser-bloco1'>
                        <div className='paineluser-bloco5-img'></div>
                        <p className='paineluser-bloco1-p'>Editar Minhas Configurações</p>
                      </div>
                    </Link>
                    <Link to='/' className='paineluser-bloco-links'>
                      <div className='paineluser-bloco1'>
                        <div className='paineluser-bloco6-img'></div>
                        <p className='paineluser-bloco1-p'>Sair</p>
                      </div>
                    </Link>
                  </div>

              </div>
          </div>
        </div>
    </div>
  );
}

export default PainelUser