import React from 'react';
import linkWeatherIcon from '../images/links-rain.svg';
import { Link } from 'react-router-dom';
import './Linkbar.css';
import linkPortalAluno from '../images/links-aluno.svg';
// import linkPortalAlunoSelected from '../images/links-aluno-selected.svg';
import linkMoodle from '../images/links-moodle.svg';
import linkWebmail from '../images/links-email.svg';

function Linkbar() {
  return (
    <>
        <nav className='linkbar'>
            <div className='linkbar-container'>

                        <Link to="/" className="link-clima">
                                {/* <img src={linkWeatherIcon} alt="Clima Patos de Minas" /> */}
                                <div className='link-div-img-clima'></div>
                                <p className='link-p-clima'>Patos de Minas 23 °C / 19 °C</p>
                        </Link>

                        <ul className='link-menu'>
                            
                            <li className='link-item'>
                                <Link to='/' className='link-links'>
                                    <a href='https://www.portalestudante.ufu.br/' className='link-links'>
                                            {/* <img src={linkPortalAluno} alt="Portal do Aluno" className='pri' /> */}
                                            <div className='link-div-img-portal'></div>
                                            <p className='link-p-txt'>Portal do Aluno</p>
                                    </a>
                                </Link>
                            </li>

                            <li className='link-item'>
                                <Link to='/' className='link-links'>
                                    <a href='https://www.moodle.ufu.br/' className='link-links'>
                                        {/* <img src={linkMoodle} alt="Moodle UFU" /> */}
                                        <div className='link-div-img-moodle'></div>
                                        <p className='link-p-txt'>Moodle UFU</p>
                                    </a>
                                </Link>
                            </li>

                            <li className='link-item'>
                                <Link to='/' className='link-links'>
                                    <a href='https://www.mail.ufu.br/' className='link-links'>
                                        {/* <img src={linkWebmail} alt="E-mail UFU" /> */}
                                        <div className='link-div-img-email'></div>
                                        <p className='link-p-txt'>Webmail UFU</p>
                                    </a>
                                </Link>
                            </li>

                        </ul>
                        
            </div>
        </nav>
    </>
    );
}

export default Linkbar;
