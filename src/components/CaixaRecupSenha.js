import React from 'react'
import './CaixaRecupSenha.css'

function CaixaRecupSenha() {
  return (
    <div className='caixarecupsenha'>
        <div className='caixarecupsenha-container'>
            
            <div className='caixarecupsenha-conteudo'>
                    <div className='caixarecupsenha-title'>
                        <p className='caixarecupsenha-title-p'>Esqueceu sua Senha?</p>
                    </div>

                    <div className='caixarecupsenha-hero'>
                    <div className='caixarecupsenha-email'>
                        <div className='caixarecupsenha-email-title'>
                            <div className='caixarecupsenha-email-title-fig'></div>
                            <label className='caixarecupsenha-email-title-p'>E-mail:</label>
                        </div>
                        <div className='caixarecupsenha-email-entrada'>
                            <form>
                                <input 
                                    className='caixarecupsenha-email-entrada-input'
                                    name='email'
                                    type='email'
                                    placeholder=''
                                    required
                                    />
                            </form>
                        </div>
                    </div>

                    <div className='caixarecupsenha-emailenviado'>
                        <p className='caixarecupsenha-emailenviado-p'>E-mail de Recuperação de Senha Enviado para o endereço informado.</p>
                    </div>

                    <div className='caixarecupsenha-butrecup-container'>
                        <div className='caixarecupsenha-butrecup-rect'>
                            <p className='caixarecupsenha-butrecup-p'>Recuperar Senha</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
  );
}

export default CaixaRecupSenha