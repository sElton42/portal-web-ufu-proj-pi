import React from 'react'
import './CaixaLogin.css'
import { Link } from 'react-router-dom';

function CaixaLogin() {
  return (
    <div className='caixalogin'>
        <div className='caixalogin-container'>
            <div className='caixalogin-conteudo'>
                <div className='caixalogin-title'>
                    <p className='caixalogin-title-p'>Faça seu Login</p>
                </div>
                
                <div className='caixalogin-hero'>
                    <div className='caixalogin-usuario'>
                        <div className='caixalogin-usuario-title'>
                            <div className='caixalogin-usuario-title-fig'></div>
                            <label className='caixalogin-usuario-title-p'>Usuário:</label>
                        </div>
                        <div className='caixalogin-usuario-entrada'>
                            <form>
                                <input 
                                    className='caixalogin-usuario-entrada-input'
                                    name='username'
                                    type='text'
                                    placeholder=''
                                    required
                                    />
                            </form>
                        </div>
                    </div>

                    <div className='caixalogin-senha'>
                        <div className='caixalogin-senha-title'>
                            <div className='caixalogin-senha-title-fig'></div>
                            <label className='caixalogin-senha-title-p'>Senha:</label>
                        </div>
                        <div className='caixalogin-senha-entrada'>
                            <form>
                                <input 
                                    className='caixalogin-senha-entrada-input'
                                    name='psw'
                                    type='password'
                                    placeholder=''
                                    required
                                    />
                            </form>
                        </div>
                    </div>

                    <div className='caixalogin-loginincorreto'>
                        <p className='caixalogin-loginincorreto-p'>A senha ou usuário informados são incorretos.</p>
                    </div>

                    <div className='caixalogin-butlogin-container'>
                        <Link to='/paineluser' className='caixalogin-butlogin-link'>
                            <div className='caixalogin-butlogin-rect'>
                                <p className='caixalogin-butlogin-p'>Entrar</p>
                            </div>
                        </Link>
                    </div>

                    <div className='caixalogin-texthelp-container'>
                        <Link to='/recuperarsenha' className='caixalogin-texthelp-links'>
                            <p className='caixalogin-texthelp-p'>Esqueci minha Senha.</p>
                        </Link>
                        <Link to='/signin' className='caixalogin-texthelp-links'>
                            <p className='caixalogin-texthelp-p2'>Ainda não sou Cadastrado.</p>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
}

export default CaixaLogin