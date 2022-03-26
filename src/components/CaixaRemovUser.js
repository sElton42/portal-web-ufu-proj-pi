import React from "react";
import "./CaixaRemovUser.css";

function CaixaRemovUser() {
  return (
    <>
      <div className="caixaremovuser">
        <div className="caixaremovuser-container">
          <div className="caixaremovuser-conteudo">
            <div className="caixaremovuser-title">
              <p className="caixaremovuser-title-p">Remover Usuário</p>
            </div>

            <div className="caixaremovuser-removcontainer">
              <div className="caixaremovuser-removcontainer-titulo">
                <p className="caixaremovuser-removcontainer-titulo-p">
                  Usuário:
                </p>

                <div className="caixaremovuser-removcontainer-selectboxcontainer">
                  <div class="select">
                    <select id="standard-select">
                      <option value="Option 1">Elton S</option>
                      <option value="Option 2">Marcus V</option>
                    </select>
                    <span class="focus"></span>
                  </div>
                </div>
              </div>

              <div className="caixaremovuser-butremov-rect">
                <p className="caixaremovuser-butremov-p">Remover Usuário</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default CaixaRemovUser;
