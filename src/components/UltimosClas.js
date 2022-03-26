import React from "react";
import "./UltimosClas.css";
import img1 from "../images/clas1-2.png";
import img2 from "../images/clas3.jpg";
import img3 from "../images/clas2-1.jpg";
import img4 from "../images/clas4.jpg";
import { Link } from "react-router-dom";

function UltimosClas() {
  return (
    <div className="UltimosClas">
      <div className="UltimosClas-container">
        <div className="UltimosClas-leftside">
          <Link className="linkclassificados" to='/lerclassificado'>
            <div className="UltimosClas-leftside-bloco-1">
              <div className="UltimosClas-leftside-bloco-1-titulo">
                <p className="UltimosClas-leftside-bloco-1-titulo-p">
                  Vaga em República
                </p>
              </div>
              <div className="UltimosClas-leftside-bloco-1-imagem">
                {/* <div className='UltimosClas-leftside-bloco-1-img'></div> */}
                <img src={img1} className="UltimosClas-leftside-bloco-1-img" />
              </div>
              <div className="UltimosClas-leftside-bloco-1-txt">
                <p className="UltimosClas-leftside-bloco-1-txt-p">
                  Descrição: Disponibiliza-se vaga em República Masculina próximo
                  à... pelo Valor de R$... com Internet, Água e Luz incluídos e
                  Quarto Individual.
                </p>
              </div>
            </div>
          </Link>

          <Link className="linkclassificados" to='/lerclassificado'>
            <div className="UltimosClas-leftside-bloco-1">
              <div className="UltimosClas-leftside-bloco-1-titulo">
                <p className="UltimosClas-leftside-bloco-1-titulo-p">
                  Vende-se Materiais de Desenho
                </p>
              </div>
              <div className="UltimosClas-leftside-bloco-1-imagem">
                <img src={img2} className="UltimosClas-leftside-bloco-1-img" />
              </div>
              <div className="UltimosClas-leftside-bloco-1-txt">
                <p className="UltimosClas-leftside-bloco-1-txt-p">
                  Descrição: Vende-se Materiais de Desenho usados para a
                  Disciplina de Desenho para Engenharia.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="UltimosClas-rightside">
          <Link className="linkclassificados" to='/lerclassificado'>
            <div className="UltimosClas-leftside-bloco-1">
              <div className="UltimosClas-leftside-bloco-1-titulo">
                <p className="UltimosClas-leftside-bloco-1-titulo-p">
                  Design de PCBs
                </p>
              </div>
              <div className="UltimosClas-leftside-bloco-1-imagem">
                <img src={img3} className="UltimosClas-leftside-bloco-1-img" />
              </div>
              <div className="UltimosClas-leftside-bloco-1-txt">
                <p className="UltimosClas-leftside-bloco-1-txt-p">
                  Descrição: Oferece-se Serviços de Design de PCBs para
                  prototipagem com CNCs.
                </p>
              </div>
            </div>
          </Link>

          <Link className="linkclassificados" to='/lerclassificado'>
            <div className="UltimosClas-leftside-bloco-1">
              <div className="UltimosClas-leftside-bloco-1-titulo">
                <p className="UltimosClas-leftside-bloco-1-titulo-p">
                  Vende-se Materiais de Desenho
                </p>
              </div>
              <div className="UltimosClas-leftside-bloco-1-imagem">
                <img src={img4} className="UltimosClas-leftside-bloco-1-img" />
              </div>
              <div className="UltimosClas-leftside-bloco-1-txt">
                <p className="UltimosClas-leftside-bloco-1-txt-p">
                  Descrição: Vende-se 10 unidades do CI 555.
                </p>
              </div>
            </div>
          </Link>

            <div className="UltimosClas-rightside-arrows">
                <div className="UltimosClas-rightside-arrows-box">
                    <div className="UltimosClas-rightside-arrows-left"></div>
                    <div className="UltimosClas-rightside-arrows-right"></div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default UltimosClas;
