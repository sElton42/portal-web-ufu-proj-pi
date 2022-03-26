import React from 'react';
import './Footer.css';
import placeMarker from '../images/aboutus-place.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
  <>
     <div className='footer'>
        <div className='footer-container'>
            <div className='footer-leftside-container'>
                <div className="footer-leftside-line"></div>
                <p className='footer-leftside-title'>ENDEREÇOS</p>

                <div className='footer-leftside-enderecos-container'>
                    
                    <div className='footer-leftside-enderecos-prograd'>
                        <p className='footer-leftside-enderecos-prograd-title'>PROGRAD e Secretaria de Cursos</p>
                        <div className='footer-leftside-enderecos-prograd-containertxt'>
                            <img src={placeMarker} className='footer-leftside-enderecos-prograd-img' />
                            <p className='footer-leftside-enderecos-prograd-txt'>Rua Major Gote, 808 - Bloco M (Unipam) - Sala(s) 109 - Bairro Caiçaras</p>
                        </div>
                    </div>

                    <div className='footer-leftside-enderecos-prograd'>
                        <p className='footer-leftside-enderecos-prograd-title'>Pavonianos</p>
                        <div className='footer-leftside-enderecos-prograd-containertxt'>
                            <img src={placeMarker} className='footer-leftside-enderecos-prograd-img' />
                            <p className='footer-leftside-enderecos-prograd-txt'>Rua Padre Pavoni, 290 - Bairro Rosário</p>
                        </div>
                    </div>

                    <div className='footer-leftside-enderecos-prograd'>
                        <p className='footer-leftside-enderecos-prograd-title'>Laboratórios</p>
                        <div className='footer-leftside-enderecos-prograd-containertxt'>
                            <img src={placeMarker} className='footer-leftside-enderecos-prograd-img' />
                            <p className='footer-leftside-enderecos-prograd-txt'>Rua Major Jerônimo, 566 - Bairro Centro</p>
                        </div>
                    </div>

                    <div className='footer-leftside-enderecos-prograd'>
                        <p className='footer-leftside-enderecos-prograd-title'>Campus Patos de Minas</p>
                        <div className='footer-leftside-enderecos-prograd-containertxt'>
                            <img src={placeMarker} className='footer-leftside-enderecos-prograd-img' />
                            <p className='footer-leftside-enderecos-prograd-txt'>Av. Getúlio Vargas, 230 - Bairro Centro</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className='footer-rightside-container'>
                <div className="footer-rightside-line"></div>
                <p className='footer-rightside-title'>ACESSO RÁPIDO</p>

                <div className='footer-rightside-acesso-container'>
                    <div className='footer-rightside-acesso'>
                        <Link to='/' className='footer-rightside-links'><p className='footer-rightside-links-home'>Home</p></Link>
                        <Link to='/noticias' className='footer-rightside-links'><p className='footer-rightside-links-news'>Notícias</p></Link>
                        <Link to='/vagas' className='footer-rightside-links'><p className='footer-rightside-links-vagas'>Vagas</p></Link>
                        <Link to='/classificados' className='footer-rightside-links'><p className='footer-rightside-links-clas'>Classificados</p></Link>
                        <Link to='/projetos' className='footer-rightside-links'><p className='footer-rightside-links-projs'>Projetos</p></Link>
                        <Link to='/login' className='footer-rightside-links'><p className='footer-rightside-links-login'>Login</p></Link>
                    </div>
                </div>

            </div>

        </div>
    </div>
  </>
  );
}

export default Footer;
