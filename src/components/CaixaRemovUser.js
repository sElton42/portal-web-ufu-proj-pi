import React from "react";
import "./CaixaRemovUser.css";
import instancedb from '../apis/instancedb';
import {useState} from 'react';
import ResultFetchUsers from "./resultFetchUsers.js";

function CaixaRemovUser() {


  
  const getUser = () => {
    instancedb.get('/usuarios.json')
    .then(res => {
      // console.log(res)

      const usuariosRecuperados = res.data
      console.log(usuariosRecuperados)
      

    }).catch(err => {
      console.log(err)
    })
  }

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
                  {/* <div class="select" onClick={getUser}> */}
                    {/* <select id="standard-select"> */}
                        {/* <div> */}
                        {/* <option> */}
                          {/* teste */}
                          <ResultFetchUsers/>
                        {/* </option> */}
                        {/* </div> */}
                    {/* </select> */}
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
