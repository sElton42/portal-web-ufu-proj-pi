import React from "react";
import "./Hero.css";
import imgProj1 from '../images/proj1.jpg';
import imgProj2 from '../images/proj2.jpg';
import imgNews1 from '../images/noticias1.jpg';
import imgNews2 from '../images/noticias2.jpg';
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-container">
          <div className="hero-conteudo">
            <div className="hero-coluna-1">
              <div className="hero-coluna-1-slider-1">
                  <div className="hero-coluna-1-slider-1-titulo">
                      <div className="hero-coluna-1-slider-1-titulo-line"></div>
                      <p className="hero-coluna-1-slider-1-titulo-p">ÚLTIMAS VAGAS</p>
                  </div>
                  <div className="hero-coluna-1-slider-1-conteudo">
                      <div className="hero-coluna-1-slider-1-conteudo-arrowleft"></div>
                      <Link className="linknoticias" to='/lervagas'>
                        <div className="hero-coluna-1-slider-1-conteudo-bloco-1">
                            <div className="hero-coluna-1-slider-1-conteudo-bloco-1-titulo">
                              Estágio
                            </div>
                            <div className="hero-coluna-1-slider-1-conteudo-bloco-1-descricao">
                              Área: Dispositivos Embarcado <br />
                              Empresa: Nome Empresa <br />
                              Local: Patos de Minas / MG <br />
                            </div>
                        </div>
                      </Link>
                      <Link className="linknoticias" to='/lervagas'>
                      <div className="hero-coluna-1-slider-1-conteudo-bloco-2">
                          <div className="hero-coluna-1-slider-1-conteudo-bloco-1-titulo">
                              Trainee
                            </div>
                            <div className="hero-coluna-1-slider-1-conteudo-bloco-1-descricao">
                              Área: Redes de Computadores <br />
                              Empresa: Nome Empresa <br />
                              Local: Patos de Minas / MG <br />
                          </div>
                      </div>
                      </Link>
                      <div className="hero-coluna-1-slider-1-conteudo-arrowright"></div>
                  </div>              
              </div>

              <div className="hero-coluna-1-slider-2">
                  
                  <div className="hero-coluna-1-slider-2-titulo">
                      <div className="hero-coluna-1-slider-2-titulo-line"></div>
                      <p className="hero-coluna-1-slider-2-titulo-p">ÚLTIMOS PROJETOS</p>
                  </div>

                    <div className="hero-coluna-1-slider-2-conteudo">
                        <div className="hero-coluna-1-slider-2-conteudo-arrowleft"></div>

                        <Link className="linkprojeto" to='/lerprojeto'>
                          <div className="hero-coluna-1-slider-2-conteudo-bloco-1">
                              <img src={imgProj1} className="hero-coluna-1-slider-2-conteudo-bloco-1-img" />
                              <div className="hero-coluna-1-slider-2-conteudo-bloco-1-img-porbaixo">
                                <p className="hero-coluna-1-slider-2-conteudo-bloco-1-img-porbaixo-txt">Clique para Saber Mais.</p>
                              </div>
                              <p className="hero-coluna-1-slider-2-conteudo-bloco-legenda">Circuito Transmissor FM</p>
                          </div>
                        </Link>

                        <Link className="linkprojeto" to='/lerprojeto'>
                          <div className="hero-coluna-1-slider-2-conteudo-bloco-2">
                              <img src={imgProj2} className="hero-coluna-1-slider-2-conteudo-bloco-2-img" />
                              <div className="hero-coluna-1-slider-2-conteudo-bloco-2-img-porbaixo">
                                <p className="hero-coluna-1-slider-2-conteudo-bloco-2-img-porbaixo-txt">Clique para Saber Mais.</p>
                              </div>
                              <p className="hero-coluna-1-slider-2-conteudo-bloco-legenda">Gerador de Funções</p>
                          </div>
                        </Link>

                        <div className="hero-coluna-1-slider-2-conteudo-arrowright"></div>
                    </div>
              </div>
            </div>

            <div className="hero-coluna-2">
              <div className="hero-coluna-2-slider">

                  <div className="hero-coluna-2-titulo">
                    <div className="hero-coluna-2-slider-titulo">
                        <div className="hero-coluna-2-slider-titulo-line"></div>
                        <p className="hero-coluna-2-slider-titulo-p">ÚLTIMAS NOTÍCIAS</p>
                    </div>
                  </div>

                  <div className="hero-coluna-2-slider-conteudo">
                    <Link className="linknoticias" to='/lernoticia'>
                      <div className="hero-coluna-2-slider-conteudo-bloco-1">
                          <img src={imgNews1} className="hero-coluna-2-slider-conteudo-bloco-1-img" />
                          <p className="hero-coluna-2-slider-conteudo-bloco-1-legenda">UFU vai receber mais 4 milhões para continuidade da construção do primeiro bloco.</p>
                      </div>
                    </Link>

                    <Link className="linknoticias" to='/lernoticia'>
                      <div className="hero-coluna-2-slider-conteudo-bloco-2">
                          <img src={imgNews2} className="hero-coluna-2-slider-conteudo-bloco-2-img" />
                          <p className="hero-coluna-2-slider-conteudo-bloco-2-legenda">UFU Patos de Minas vai realizar a 1ª Semana de Engenharia de Alimentos aberta ao público.</p>
                      </div>
                    </Link>
                      
                      <div className="hero-coluna-2-slider-conteudo-arrows">
                          <div className="hero-coluna-2-slider-conteudo-arrows-arrowleft"></div>
                          <div className="hero-coluna-2-slider-conteudo-arrows-arrowright"></div>
                      </div>

                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
