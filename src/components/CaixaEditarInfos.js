import React from "react";
import "./CaixaEditarInfos.css";

function CaixaEditarInfos() {
  return (
    <div className="caixaeditarinfos">
      <div className="caixaeditarinfos-container">
        <div className="caixaeditarinfos-conteudo">
          <div className="caixaeditarinfos-title">
            <p className="caixaeditarinfos-title-p">Editar Informações</p>
          </div>

          <div className="caixaeditarinfos-hero">
            <div className="caixaeditarinfos-nomecompleto">
              <div className="caixaeditarinfos-nomecompleto-title">
                <div className="caixaeditarinfos-nomecompleto-title-fig"></div>
                <label className="caixaeditarinfos-nomecompleto-title-p">
                  Nome Completo:
                </label>
              </div>
              <div className="caixaeditarinfos-nomecompleto-entrada">
                <form>
                  <input
                    className="caixaeditarinfos-nomecompleto-entrada-input"
                    name="nome"
                    type="text"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixaeditarinfos-senha">
              <div className="caixaeditarinfos-senha-title">
                <div className="caixaeditarinfos-senha-title-fig"></div>
                <label className="caixaeditarinfos-senha-title-p">Senha:</label>
              </div>
              <div className="caixaeditarinfos-senha-entrada">
                <form>
                  <input
                    className="caixaeditarinfos-senha-entrada-input"
                    name="psw"
                    type="password"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixaeditarinfos-senha">
              <div className="caixaeditarinfos-senha-title">
                <div className="caixaeditarinfos-senha-title-fig"></div>
                <label className="caixaeditarinfos-senha-title-p">
                  Repita a Senha:
                </label>
              </div>
              <div className="caixaeditarinfos-senha-entrada">
                <form>
                  <input
                    className="caixaeditarinfos-senha-entrada-input"
                    name="psw"
                    type="password"
                    placeholder=""
                    required
                  />
                </form>
              </div>
            </div>

            <div className="caixaeditarinfos-boxoptions">
              <div className="caixaeditarinfos-selectbox">
                <label class="container">
                  <p className="container-p">Sou Aluno(a)</p>
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <p className="container-p">Sou Professor(a)</p>
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <p className="container-p">Outro</p>
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </div>

              <div className="caixaeditarinfos-foto">
                <p className="caixaeditarinfos-foto-p">
                  Adicionar Foto de Perfil:
                </p>
                <div className="caixaeditarinfos-butprocurar-container">
                  <div className="caixaeditarinfos-butprocurar-rect">
                    <div className="caixaeditarinfos-butprocurar-img"></div>
                    <p className="caixaeditarinfos-butprocurar-p">Procurar</p>
                  </div>
                  <p className="caixaeditarinfos-butprocurar-infop">
                    Imagem Inserida!
                  </p>
                </div>
              </div>
            </div>

            <div className="caixaeditarinfos-infofaltantes">
              <p className="caixaeditarinfos-infofaltantes-p">Mensagem de erro.</p>
            </div>

            <div className="caixaeditarinfos-butlogin-container">
              <div className="caixaeditarinfos-butlogin-rect">
                <p className="caixaeditarinfos-butlogin-p">Alterar Dados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaixaEditarInfos;
