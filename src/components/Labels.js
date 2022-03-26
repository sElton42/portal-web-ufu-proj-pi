import React from 'react';
import './Labels.css';
import { Link } from 'react-router-dom';

function Labels() {
    return (
      <>
      <nav className='labels'>
              <div className='labels-container'>
                  <ul className='labels-menu'>
                      <li className='labels-item'>
                        <Link to='/noticias' className='labels-link'>
                            <div className='labels-div-img-news'>
                              {/* <img src={noticiasImg} alt='notícias' className='labels-img-noticias' /> */}
                              {/* <img src={noticiasImgSelec} alt='notícias' className='labels-img-noticias2' /> */}
                            </div>
                            <p className='labels-title'>NOTÍCIAS</p>
                            {/* <img src={labelsLine} alt=" " className='labels-linha'/> */}
                            <p className='labels-txt'>Encontre Notícias pertinentes à UFU - Campus 
                            Patos de Minas e seus Cursos.</p>
                        </Link>
                      </li>

                      <li className='labels-item'>
                        <Link to='/vagas' className='labels-link'>
                        <div className='labels-div-img-vagas'></div>
                            {/* <img src={vagasImg} alt='vagas' className='labels-img-noticias' /> */}
                            <p className='labels-title'>VAGAS</p>
                            {/* <img src={labelsLine} alt=" " className='labels-linha' /> */}
                            <p className='labels-txt'>Encontre Oportunidades de Estágio, Trainee e Trabalho pertinentes aos Cursos da UFU - Campus Patos de Minas.</p>
                        </Link>
                      </li>

                      <li className='labels-item'>
                        <Link to='/classificados' className='labels-link'>
                        <div className='labels-div-img-clas'></div>
                            {/* <img src={classifImg} alt='classificados' className='labels-img-noticias' /> */}
                            <p className='labels-title'>CLASSIFICADOS</p>
                            {/* <img src={labelsLine} alt=" " className='labels-linha' /> */}
                            <p className='labels-txt'>Encontre e Divulgue Vagas em Repúblicas, Prestação de Serviços, Vendas etc. </p>
                        </Link>
                      </li>

                      <li className='labels-item'>
                        <Link to='/projetos' className='labels-link'>
                        <div className='labels-div-img-proj'></div>
                            {/* <img src={projImg} alt='projetos' className='labels-img-noticias' /> */}
                            <p className='labels-title'>PROJETOS</p>
                            {/* <img src={labelsLine} alt=" " className='labels-linha' /> */}
                            <p className='labels-txt'>Confira e Divulgue Projetos Acadêmicos feitos pela Comunidade UFU - Campus Patos de Minas.</p>
                        </Link>
                      </li>

                  </ul>
              </div>
              </nav>
      </>
    );
  }

export default Labels;
