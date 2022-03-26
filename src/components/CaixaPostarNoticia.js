import React from "react";
import "./CaixaPostarNoticia.css";

function CaixaPostarNoticia() {
  return (
    <div className="caixapostarnoticia">
      <div className="caixapostarnoticia-container">
        <div className="caixapostarnoticia-conteudo">
          <div className="caixapostarnoticia-title">
            <p className="caixapostarnoticia-title-p">Postar Notícia</p>
          </div>

          <div className="caixapostarnoticia-vialink">
            <div className="caixapostarnoticia-vialink-titulo">
              <p className="caixapostarnoticia-vialink-titulo-p">Título:</p>
              <div className="caixapostarnoticia-titulo-entrada">
                <form>
                  <input
                    className="caixapostarnoticia-titulo-entrada-input"
                    name="nome"
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarnoticia-vialink-titulo">
              <p className="caixapostarnoticia-vialink-titulo-p">Link:</p>
              <div className="caixapostarnoticia-titulo-entrada">
                <form>
                  <input
                    className="caixapostarnoticia-titulo-entrada-input"
                    name="nome"
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarnoticia-vialink-capa">
              <p className="caixapostarnoticia-vialink-capa-p">Capa:</p>
              <div className="caixapostarnoticia-butprocurar-rect">
                <div className="caixapostarnoticia-butprocurar-img"></div>
                <p className="caixapostarnoticia-butprocurar-p">Procurar</p>
              </div>
            </div>
            <p className="caixapostarnoticia-butprocurar-infop">
              Imagem Inserida!
            </p>

            <div className="caixapostarnoticia-butpostar-rect">
              <p className="caixapostarnoticia-butpostar-p">Postar</p>
            </div>

            <p className="caixapostarnoticia-butpostar-infop">
              Notícia Postada com Sucesso
            </p>

            <div className="caixapostarnoticia-ou">
              <p className="caixapostarnoticia-ou-p">
                {" "}
                ----- Ou Escreva a Notícia -----
              </p>
            </div>
          </div>

          <div className="caixapostarnoticia-redigido">

            <div className="caixapostarnoticia-vialink-titulo">
              <p className="caixapostarnoticia-vialink-titulo-p">Título:</p>
              <div className="caixapostarnoticia-titulo-entrada">
                <form>
                  <input
                    className="caixapostarnoticia-titulo-entrada-input"
                    name="nome"
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
                    className="caixapostarnoticia-titulo-entrada-input"
                    name="conteudo"
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixapostarnoticia-butprocurar2">
              <div className="caixapostarnoticia-vialink-capa">
                <p className="caixapostarnoticia-vialink-capa-p">Capa:</p>
                <div className="caixapostarnoticia-butprocurar-rect">
                  <div className="caixapostarnoticia-butprocurar-img"></div>
                  <p className="caixapostarnoticia-butprocurar-p">Procurar</p>
                </div>
              </div>
            </div>
            <p className="caixapostarnoticia-butprocurar2-infop">Imagem Inserida!</p>

            <div className="caixapostarnoticia-butprocurar2">
              <div className="caixapostarnoticia-vialink-capa">
                <p className="caixapostarnoticia-vialink-capa-p">Ilustrações:</p>
                <div className="caixapostarnoticia-butprocurar-rect">
                  <div className="caixapostarnoticia-butprocurar-img"></div>
                  <p className="caixapostarnoticia-butprocurar-p">Procurar</p>
                </div>
              </div>
            </div>
            <p className="caixapostarnoticia-butprocurar2-infop">Imagens Inseridas!</p>

            <div className="caixapostarnoticia-butpostar-rect">
              <p className="caixapostarnoticia-butpostar-p">Postar</p>
            </div>
            <p className="caixapostarnoticia-butpostar-infop">
              Notícia Postada com Sucesso
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}

export default CaixaPostarNoticia;
