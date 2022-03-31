import React from "react";
import "./CaixaPostarClas.css";
import {useState} from 'react';
import instancedb from '../apis/instancedb';


function CaixaPostarClas() {

  const [data, setData] = useState({
    titulo: "",
    descricao: "",
    conteudo: "",
    capa: "null",
    ilustracoes: "null"
})

function submit(e) {
    e.preventDefault();
    
    console.log("dados enviados: ", data)
    // console.log(data.username)

    const Data = {
        titulo: data.titulo,
        descricao: data.descricao,
        conteudo: data.conteudo,
        capa: data.capa,
        ilustracoes: data.ilustracoes
    }
    instancedb.post('/classificados.json', Data)
    .then(response=>{
        console.log(response);
    })
}

function handle(e) {
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
}

  return (
    <div className="caixapostarclas">
      <div className="caixapostarclas-container">
        <div className="caixapostarclas-conteudo">
          <div className="caixapostarclas-title">
            <p className="caixapostarclas-title-p">Postar Classificado</p>
          </div>

          <div className="caixapostarclas-vialink">
            <div className="caixapostarclas-vialink-titulo">
              <p className="caixapostarclas-vialink-titulo-p">Título:</p>
              <div className="caixapostarclas-titulo-entrada">
                <form>
                  <input
                    className="caixapostarclas-titulo-entrada-input"
                    name="titulo"
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarclas-conteudo-titulo">
              <p className="caixapostarclas-vialink-titulo-p">Descrição:</p>
              <div className="caixapostarclas-conteudo-entrada">
                <form>
                  <textarea
                    className="caixapostarclas-titulo-entrada-input"
                    name="descricao"
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarclas-vialink-titulo">
              <p className="caixapostarclas-vialink-titulo-p">Link:</p>
              <div className="caixapostarclas-titulo-entrada">
                <form>
                  <input
                    className="caixapostarclas-titulo-entrada-input"
                    name="link"
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarclas-butprocurar2">
              <div className="caixapostarclas-vialink-capa">
                <p className="caixapostarclas-vialink-capa-p">Capa:</p>
                <div className="caixapostarclas-butprocurar-rect">
                  <div className="caixapostarclas-butprocurar-img"></div>
                  <p className="caixapostarclas-butprocurar-p">Procurar</p>
                </div>
              </div>
            </div>
            <p className="caixapostarclas-butprocurar2-infop">Imagem Inserida!</p>

            <div className="caixapostarclas-butpostar-rect">
              <p className="caixapostarclas-butpostar-p">Postar</p>
            </div>

            <p className="caixapostarclas-butpostar-infop">
              Vaga Postada com Sucesso!
            </p>

            <div className="caixapostarclas-ou">
              <p className="caixapostarclas-ou-p">
                {" "}
                ----- Ou Escreva o Classificado -----
              </p>
            </div>

          </div>

          <div className="caixapostarclas-redigido">

            <div className="caixapostarclas-vialink-titulo">
              <p className="caixapostarclas-vialink-titulo-p">Título:</p>
              <div className="caixapostarclas-titulo-entrada">
                <form>
                  <input
                    onChange={(e)=>handle(e)}
                    className="caixapostarclas-titulo-entrada-input"
                    name="titulo"
                    id = "titulo"
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarclas-conteudo-titulo">
              <p className="caixapostarclas-vialink-titulo-p">Descrição:</p>
              <div className="caixapostarclas-conteudo-entrada">
                <form>
                  <textarea
                    onChange={(e)=>handle(e)}
                    className="caixapostarclas-titulo-entrada-input"
                    name="descricao"
                    id="descricao"
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarnoticia-conteudo-titulo">
              <p className="caixapostarnoticia-vialink-titulo-p">Conteúdo:</p>
              <div className="caixapostarnoticia-conteudo-entrada">
                <form>
                  <textarea
                    onChange={(e)=>handle(e)}
                    className="caixapostarnoticia-titulo-entrada-input"
                    name="conteudo"
                    id="conteudo"
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarclas-butprocurar2">
              <div className="caixapostarclas-vialink-capa">
                <p className="caixapostarclas-vialink-capa-p">Capa:</p>
                <div className="caixapostarclas-butprocurar-rect">
                  <div className="caixapostarclas-butprocurar-img"></div>
                  <p className="caixapostarclas-butprocurar-p">Procurar</p>
                </div>
              </div>
            </div>
            <p className="caixapostarclas-butprocurar2-infop">Imagem Inserida!</p>

            <div className="caixapostarclas-butprocurar2">
              <div className="caixapostarclas-vialink-capa">
                <p className="caixapostarclas-vialink-capa-p">Ilustrações:</p>
                <div className="caixapostarclas-butprocurar-rect">
                  <div className="caixapostarclas-butprocurar-img"></div>
                  <p className="caixapostarclas-butprocurar-p">Procurar</p>
                </div>
              </div>
            </div>
            <p className="caixapostarclas-butprocurar2-infop">Imagens Inseridas!</p>

            <div className="caixapostarclas-butpostar-rect" onClick={(e)=>submit(e)}>
              <p className="caixapostarclas-butpostar-p">Postar</p>
            </div>
            <p className="caixapostarclas-butpostar-infop">
              Notícia Postada com Sucesso
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}

export default CaixaPostarClas;
