import React from "react";
import './UltimosProjs.css';
import img1 from "../images/proj1.jpg";
import img2 from "../images/proj2.jpg";
import img3 from "../images/proj3.png";
import img4 from "../images/proj4.jpg";
import { Link } from "react-router-dom";

function UltimosProjs() {
  return (
    <div className="ultimosprojs">
      <div className="ultimosprojs-container">

        <div className="ultimosprojs-leftside">
          <Link className="linkprojeto" to='/lerprojeto'>
            <div className="ultimosprojs-leftside-bloco-1">
              <div className="ultimosprojs-leftside-bloco-1-titulo">
                <p className="ultimosprojs-leftside-bloco-1-titulo-p">
                  Circuito Transmissor FM
                </p>
              </div>
              <div className="ultimosprojs-leftside-bloco-1-imagem">
                <img src={img1} className="ultimosprojs-leftside-bloco-1-img" />
              </div>
              <div className="ultimosprojs-leftside-bloco-1-txt">
                <p className="ultimosprojs-leftside-bloco-1-txt-p">
                  <b>Autor(es):</b> Nome dos Autor(es). <br/>
                  <b>Ano:</b> 2019
                </p>
              </div>
            </div>
            </Link>

          <Link className="linkprojeto" to='/lerprojeto'>
            <div className="ultimosprojs-leftside-bloco-1">
              <div className="ultimosprojs-leftside-bloco-1-titulo">
                <p className="ultimosprojs-leftside-bloco-1-titulo-p">
                  Gerador de Funções
                </p>
              </div>
              <div className="ultimosprojs-leftside-bloco-1-imagem">
                <img src={img2} className="ultimosprojs-leftside-bloco-1-img" />
              </div>
              <div className="ultimosprojs-leftside-bloco-1-txt">
                <p className="ultimosprojs-leftside-bloco-1-txt-p">
                  <b>Autor(es):</b> Nome dos Autor(es). <br/>
                  <b>Ano:</b> 2019
                </p>
              </div>
            </div>
          </Link>
          </div>

          <div className="ultimosprojs-rightside">
            <Link className="linkprojeto" to='/lerprojeto'>
              <div className="ultimosprojs-leftside-bloco-1">
                <div className="ultimosprojs-leftside-bloco-1-titulo">
                  <p className="ultimosprojs-leftside-bloco-1-titulo-p">
                    Instalação Elétrica Residencial
                  </p>
                </div>
                <div className="ultimosprojs-leftside-bloco-1-imagem">
                  <img src={img3} className="ultimosprojs-leftside-bloco-1-img" />
                </div>
                <div className="ultimosprojs-leftside-bloco-1-txt">
                  <p className="ultimosprojs-leftside-bloco-1-txt-p">
                    <b>Autor(es):</b> Nome dos Autor(es). <br/>
                    <b>Ano:</b> 2021
                  </p>
                </div>
              </div>
            </Link>

            <Link className="linkprojeto" to='/lerprojeto'>
              <div className="ultimosprojs-leftside-bloco-1">
                <div className="ultimosprojs-leftside-bloco-1-titulo">
                  <p className="ultimosprojs-leftside-bloco-1-titulo-p">
                    Fonte de Tensão Ajustável
                  </p>
                </div>
                <div className="ultimosprojs-leftside-bloco-1-imagem">
                  <img src={img4} className="ultimosprojs-leftside-bloco-1-img" />
                </div>
                <div className="ultimosprojs-leftside-bloco-1-txt">
                  <p className="ultimosprojs-leftside-bloco-1-txt-p">
                    <b>Autor(es):</b> Nome dos Autor(es). <br/>
                    <b>Ano:</b> 2019
                  </p>
                </div>
              </div>
            </Link>

              <div className="ultimosprojs-rightside-arrows">
                  <div className="ultimosprojs-rightside-arrows-box">
                      <div className="ultimosprojs-rightside-arrows-left"></div>
                      <div className="ultimosprojs-rightside-arrows-right"></div>
                  </div>
              </div>

        </div>

      </div>
    </div>
  );
}

export default UltimosProjs;