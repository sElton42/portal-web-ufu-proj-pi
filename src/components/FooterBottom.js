import React from 'react';
import './FooterBottom.css';
import logoIcon from '../images/novo_logo-cinza.svg';

function FooterBottom() {
  return (
     <>
        <div className='footerbottom'>
            <div className='footerbottom-bordertop'></div>
            <div className='footerbottom-container'>
                <div className='footerbottom-conteudo'>
                    <div className='footerbottom-conteudo-divleft'>
                        <p className='footerbottom-conteudo-divleft-txt'>© 2022 Portal UFU Campus - Patos de Minas</p>
                    </div>
                    <div className='footerbottom-conteudo-divcenter'>
                        <img src={logoIcon} alt="Logo do Portal UFU" className='footerbottom-logo-img' />
                    </div>
                    <div className='footerbottom-conteudo-divright'>
                        <p className='footerbottom-conteudo-divright-txt'>Criado Por: <br/>Elton Soares Silva<br/>Marcus Vinícius Santos de Oliveira</p>
                    </div>
                </div>
            </div>
        </div>
     </>
    );
}

export default FooterBottom;
