import React from 'react';
import './Cadastrar.css';
import { Link } from 'react-router-dom';

function Cadastrar() {
    return (
      <>
          <div className='cadastrar'>
              <div className='cadastrar-container'>
                  
                  <div className='cadastrar-container-texto'>
                    <div className='cadastrar-texto'>
                        <p className='cadastrar-texto-pequeno'>Caso seja sua Primeira Visita aqui:</p>
                        <p className='cadastrar-texto-grande'>Cadastre-se</p>
                    </div>
                  </div>

                  <Link to='/signin' className='cadastrar-links'>
                    <div className='cadastrar-container-button'>
                          <div className='cadastrar-button'> 
                              <p className='cadastrar-button-txt'>CADASTRAR</p>
                          </div>
                    </div>
                  </Link>

              </div>
          </div>
      </>
    );
  }

export default Cadastrar;
