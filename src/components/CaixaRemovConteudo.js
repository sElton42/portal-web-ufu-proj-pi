import React from 'react';
import './CaixaRemovConteudo.css';
import instancedb from '../apis/instancedb';
import {useState} from 'react';
import ResultFetchProjs from "./resultFetchProjs.js";
import ResultFetchVagas from './resultFetchVagas';
import ResultFetchClas from './resultFetchClas';
import ResultFetchNews from './resultFetchNews';

function CaixaRemovConteudo() {

  // function renderElement(){
  //   if(data == 'projetos')
  //      return <ResultFetchProjs/>
  //   else 
  //     return null;
  // }

  const [data, setData] = useState({
    tipo: "ini"
})

function handle(e) {
  const newdata = {...data}
  newdata[e.target.id] = e.target.value
  setData(newdata)
  console.log(newdata)
}

  return (
    <div className='caixaremovconteudo'>
      <div className='caixaremovconteudo-container'>

        <div className='caixaremovconteudo-conteudo'>

          <div className="caixaremovconteudo-title">
                <p className="caixaremovconteudo-title-p">Remover Conteúdo</p>
          </div>

          <div className="caixaremovconteudo-removcontainer">
              <div className="caixaremovconteudo-removcontainer-rotulo">
                <p className="caixaremovconteudo-removcontainer-rotulo-p">
                  Tipo de Conteúdo:
                </p>

                <div className="caixaremovconteudo-removcontainer-selectboxcontainer">
                  <div class="caixaremovconteudo-select1">
                    {/* <select className='selectgeral' id="standard-select"> */}
                    <select className='selectgeral' id="tipo" onChange={ (e) => handle(e) }>
                      <option id="tipo" value="noticias">Notícias</option>
                      <option id="tipo" value="vagas">Vagas</option>
                      <option id="tipo" value="classificados">Classificados</option>
                      <option id="tipo" value="projetos">Projetos</option>
                    </select>
                    <span class="focus"></span>
                  </div>
                </div>
              </div>

              <div className="caixaremovconteudo-removcontainer-rotulo">
                <p className="caixaremovconteudo-removcontainer-rotulo-p">
                  Conteúdo:
                </p>

                <div className="caixaremovconteudo-removcontainer-selectboxcontainer">
                  <div class="caixaremovconteudo-select1">
                    {/* <select id="standard-select"> */}
                
                    {/* <ResultFetchProjs/> */}
                    {data.tipo === 'projetos' ? <ResultFetchProjs/> : null}
                    {data.tipo === 'vagas' ? <ResultFetchVagas/> : null}
                    {data.tipo === 'classificados' ? <ResultFetchClas/> : null}
                    {data.tipo === 'noticias' ? <ResultFetchNews/> : null}
                    {data.tipo === 'ini' ? <ResultFetchNews/> : null}
                    
                    {/* </select> */}
                    <span class="focus"></span>
                  </div>
                </div>
              </div>

              <div className="caixaremovconteudo-butremov-rect">
                <p className="caixaremovconteudo-butremov-p">Remover Conteúdo</p>
              </div>
          </div>


        </div>
          
      </div>
    </div>
  );
}

export default CaixaRemovConteudo;