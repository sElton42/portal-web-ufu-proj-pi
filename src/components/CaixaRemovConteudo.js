import React from 'react';
import './CaixaRemovConteudo.css';

function CaixaRemovConteudo() {
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
                    <select className='selectgeral' id="standard-select">
                      <option value="Option 1">Notícias</option>
                      <option value="Option 2">Vagas</option>
                      <option value="Option 3">Classificados</option>
                      <option value="Option 4">Projetos</option>
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
                    <select id="standard-select">
                      <option value="Option 1">Conteúdo 1</option>
                      <option value="Option 2">Conteúdo 2</option>
                    </select>
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