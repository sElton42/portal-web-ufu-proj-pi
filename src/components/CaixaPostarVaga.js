import React from "react";
import "./CaixaPostarVaga.css";
import {useState} from 'react';
import instancedb from '../apis/instancedb';

function CaixaPostarVaga() {
  
  const [data, setData] = useState({
    tipo: "",
    area: "",
    empresa: "",
    local: "",
    conteudo: "",
    ilustracoes: "null"
})

function submit(e) {
    e.preventDefault();
    
    console.log("dados enviados: ", data)
    // console.log(data.username)

    const Data = {
        tipo: data.tipo,
        area: data.area,
        empresa: data.empresa,
        local: data.local,
        conteudo: data.conteudo,
        ilustracoes: data.ilustracoes
    }
    instancedb.post('/vagas.json', Data)
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
    <div className="caixapostarvaga">
      <div className="caixapostarvaga-container">
        <div className="caixapostarvaga-conteudo">
          <div className="caixapostarvaga-title">
            <p className="caixapostarvaga-title-p">Postar Vaga</p>
          </div>

          <div className="caixapostarvaga-vialink">
            <div className="caixapostarvaga-vialink-titulo">
              <p className="caixapostarvaga-vialink-titulo-p">Tipo:</p>
              <div className="caixapostarvaga-titulo-entrada">
                <form>
                  <input
                    className="caixapostarvaga-titulo-entrada-input"
                    name="tipo"
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarvaga-vialink-titulo">
              <p className="caixapostarvaga-vialink-titulo-p">Área:</p>
              <div className="caixapostarvaga-titulo-entrada">
                <form>
                  <input
                    className="caixapostarvaga-titulo-entrada-input"
                    name="area"
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarvaga-vialink-titulo">
              <p className="caixapostarvaga-vialink-titulo-p">Empresa:</p>
              <div className="caixapostarvaga-titulo-entrada">
                <form>
                  <input
                    className="caixapostarvaga-titulo-entrada-input"
                    name="empresa"
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarvaga-vialink-titulo">
              <p className="caixapostarvaga-vialink-titulo-p">Local:</p>
              <div className="caixapostarvaga-titulo-entrada">
                <form>
                  <input
                    className="caixapostarvaga-titulo-entrada-input"
                    name="local"
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarvaga-vialink-titulo">
              <p className="caixapostarvaga-vialink-titulo-p">Link:</p>
              <div className="caixapostarvaga-titulo-entrada">
                <form>
                  <input
                    className="caixapostarvaga-titulo-entrada-input"
                    name="local"
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarvaga-butpostar-rect">
              <p className="caixapostarvaga-butpostar-p">Postar</p>
            </div>

            <p className="caixapostarvaga-butpostar-infop">
              Vaga Postada com Sucesso!
            </p>

            <div className="caixapostarvaga-ou">
              <p className="caixapostarvaga-ou-p">
                {" "}
                ----- Ou Escreva a Oferta de Vaga -----
              </p>
            </div>
          </div>

          <div className="caixapostarvaga-redigido">

          <div className="caixapostarvaga-vialink-titulo">
              <p className="caixapostarvaga-vialink-titulo-p">Tipo:</p>
              <div className="caixapostarvaga-titulo-entrada">
                <form>
                  <input
                    onChange={(e)=>handle(e)}
                    className="caixapostarvaga-titulo-entrada-input"
                    name="tipo"
                    id = 'tipo'
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarvaga-vialink-titulo">
              <p className="caixapostarvaga-vialink-titulo-p">Área:</p>
              <div className="caixapostarvaga-titulo-entrada">
                <form>
                  <input
                    onChange={(e)=>handle(e)}
                    className="caixapostarvaga-titulo-entrada-input"
                    name="area"
                    id = 'area'
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarvaga-vialink-titulo">
              <p className="caixapostarvaga-vialink-titulo-p">Empresa:</p>
              <div className="caixapostarvaga-titulo-entrada">
                <form>
                  <input
                    onChange={(e)=>handle(e)}
                    className="caixapostarvaga-titulo-entrada-input"
                    name="empresa"
                    id = 'empresa'
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarvaga-vialink-titulo">
              <p className="caixapostarvaga-vialink-titulo-p">Local:</p>
              <div className="caixapostarvaga-titulo-entrada">
                <form>
                  <input
                    onChange={(e)=>handle(e)}
                    className="caixapostarvaga-titulo-entrada-input"
                    name="local"
                    id = 'local'
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarvaga-conteudo-titulo">
              <p className="caixapostarvaga-vialink-titulo-p">Conteúdo:</p>
              <div className="caixapostarvaga-conteudo-entrada">
                <form>
                  <textarea
                    onChange={(e)=>handle(e)}
                    className="caixapostarvaga-titulo-entrada-input"
                    name="conteudo"
                    id = 'conteudo'
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarvaga-butprocurar2">
              <div className="caixapostarvaga-vialink-capa">
                <p className="caixapostarvaga-vialink-capa-p">Ilustrações:</p>
                <div className="caixapostarvaga-butprocurar-rect">
                  <div className="caixapostarvaga-butprocurar-img"></div>
                  <p className="caixapostarvaga-butprocurar-p">Procurar</p>
                </div>
              </div>
            </div>
            <p className="caixapostarvaga-butprocurar2-infop">Imagens Inseridas!</p>

            <div className="caixapostarvaga-butpostar-rect" onClick={(e)=>submit(e)}>
              <p className="caixapostarvaga-butpostar-p">Postar</p>
            </div>
            <p className="caixapostarvaga-butpostar-infop">
              Vaga Postada com Sucesso!
            </p>

          </div>          

        </div>
      </div>
    </div>
  );
}

export default CaixaPostarVaga;
