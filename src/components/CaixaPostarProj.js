import React from "react";
import "./CaixaPostarProj.css";
import {useState} from 'react';
import instancedb from '../apis/instancedb';

function CaixaPostarProj() {

  const [data, setData] = useState({
    titulo: "",
    autores: "",
    data: "",
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
        autores: data.autores,
        data: data.data,
        conteudo: data.conteudo,
        capa: data.capa,
        ilustracoes: data.ilustracoes
    }
    instancedb.post('/projetos.json', Data)
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
    <div className="caixapostarproj">
      <div className="caixapostarproj-container">


        <div className="caixapostarproj-conteudo">
          
          <div className="caixapostarproj-title">
            <p className="caixapostarproj-title-p">Postar Projeto</p>
          </div>

          <div className="caixapostarproj-vialink">
          
            <div className="caixapostarproj-vialink-titulo">
              <p className="caixapostarproj-vialink-titulo-p">Título:</p>
              <div className="caixapostarproj-titulo-entrada">
                <form>
                  <input
                    className="caixapostarproj-titulo-entrada-input"
                    name="titulo"
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarproj-vialink-titulo">
              <p className="caixapostarproj-vialink-titulo-p">Autor(es):</p>
              <div className="caixapostarproj-titulo-entrada">
                <form>
                  <input
                    className="caixapostarproj-titulo-entrada-input"
                    name="autores"
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarproj-vialink-titulo">
              <p className="caixapostarproj-vialink-titulo-p">Data:</p>
              <div className="caixapostarproj-titulo-entrada">
                <form>
                  <input
                    className="caixapostarproj-titulo-entrada-input"
                    name="data"
                    type="date"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>


            <div className="caixapostarproj-vialink-titulo">
              <p className="caixapostarproj-vialink-titulo-p">Link:</p>
              <div className="caixapostarproj-titulo-entrada">
                <form>
                  <input
                    className="caixapostarproj-titulo-entrada-input"
                    name="link"
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarproj-butprocurar2">
              <div className="caixapostarproj-vialink-capa">
                <p className="caixapostarproj-vialink-capa-p">Capa:</p>
                <div className="caixapostarproj-butprocurar-rect">
                  <div className="caixapostarproj-butprocurar-img"></div>
                  <p className="caixapostarproj-butprocurar-p">Procurar</p>
                </div>
              </div>
            </div>
            <p className="caixapostarproj-butprocurar2-infop">
              Imagem Inserida!
            </p>

            <div className="caixapostarproj-butpostar-rect">
              <p className="caixapostarproj-butpostar-p">Postar</p>
            </div>

            <p className="caixapostarproj-butpostar-infop">
              Vaga Postada com Sucesso!
            </p>

            <div className="caixapostarproj-ou">
              <p className="caixapostarproj-ou-p">
                {" "}
                ----- Ou Escreva o Projeto -----
              </p>
            </div>
          </div>

          <div className="caixapostarproj-redigido">

          <div className="caixapostarproj-vialink-titulo">
              <p className="caixapostarproj-vialink-titulo-p">Título:</p>
              <div className="caixapostarproj-titulo-entrada">
                <form>
                  <input
                    onChange={(e)=>handle(e)}
                    className="caixapostarproj-titulo-entrada-input"
                    name="titulo"
                    id = "titulo"
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarproj-vialink-titulo">
              <p className="caixapostarproj-vialink-titulo-p">Autor(es):</p>
              <div className="caixapostarproj-titulo-entrada">
                <form>
                  <input
                    onChange={(e)=>handle(e)}
                    className="caixapostarproj-titulo-entrada-input"
                    name="autores"
                    id = "autores"
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarproj-vialink-titulo">
              <p className="caixapostarproj-vialink-titulo-p">Data:</p>
              <div className="caixapostarproj-titulo-entrada">
                <form>
                  <input
                    onChange={(e)=>handle(e)}
                    className="caixapostarproj-titulo-entrada-input"
                    name="data"
                    id = "data"
                    type="date"
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

            <div className="caixapostarproj-butprocurar2">
              <div className="caixapostarproj-vialink-capa">
                <p className="caixapostarproj-vialink-capa-p">Capa:</p>
                <div className="caixapostarproj-butprocurar-rect">
                  <div className="caixapostarproj-butprocurar-img"></div>
                  <p className="caixapostarproj-butprocurar-p">Procurar</p>
                </div>
              </div>
            </div>
            <p className="caixapostarproj-butprocurar2-infop">Imagem Inserida!</p>

            <div className="caixapostarproj-butprocurar2">
              <div className="caixapostarproj-vialink-capa">
                <p className="caixapostarproj-vialink-capa-p">Ilustrações:</p>
                <div className="caixapostarproj-butprocurar-rect">
                  <div className="caixapostarproj-butprocurar-img"></div>
                  <p className="caixapostarproj-butprocurar-p">Procurar</p>
                </div>
              </div>
            </div>
            <p className="caixapostarproj-butprocurar2-infop">Imagens Inseridas!</p>

            <div className="caixapostarproj-butpostar-rect" onClick={(e)=>submit(e)}>
              <p className="caixapostarproj-butpostar-p">Postar</p>
            </div>
            <p className="caixapostarproj-butpostar-infop">
              Notícia Postada com Sucesso
            </p>

          </div>


        </div>


      </div>
    </div>
  );
}

export default CaixaPostarProj;
