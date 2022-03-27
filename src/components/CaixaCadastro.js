import React from 'react';
import './CaixaCadastro.css';
import {useState} from 'react';
import Axios from 'axios';
// import { useForm } from "react-hook-form";

function CaixaCadastro() {

    const url = "https://ufuportalextra-env.eba-6prqdmyy.us-east-1.elasticbeanstalk.com/user/cadastrar";
    const [data, setData] = useState({
        username: "",
        password: "",
        nome: "",
        email: "",
        classificacao: "",
        foto: "null"
    })

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            username: data.username,
            password: data.password,
            nome: data.nome,
            email: data.email,
            classificacao: data.classificacao,
            foto: data.foto
        })
        .then(res=>{
            console.log(res.data);
        })
        .catch(function (error) {
            console.log(error);
          });
    }

    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

  return (
    <div className='caixacadastro'>
        <div className='caixacadastro-container'>

            <div className='caixacadastro-conteudo'>
                <div className='caixacadastro-title'>
                    <p className='caixacadastro-title-p'>Faça Seu Cadastro</p>
                </div>

                <div className='caixacadastro-hero'>
                    <div className='caixacadastro-nome'>
                        <div className='caixacadastro-nome-title'>
                            <div className='caixacadastro-nome-title-fig'></div>
                            <label className='caixacadastro-nome-title-p'>Nome Completo:</label>
                        </div>
                        <div className='caixacadastro-nome-entrada'>
                            <form>
                                <input 
                                    onChange={ (e) => handle(e) }
                                    className='caixacadastro-nome-entrada-input'
                                    name='nome'
                                    id = 'nome'
                                    type='text'
                                    placeholder=''
                                    required
                                    />
                            </form>
                        </div>
                    </div>

                    <div className='caixacadastro-usuario'>
                        <div className='caixacadastro-nome-title'>
                            <div className='caixacadastro-usuario-title-fig'></div>
                            <label className='caixacadastro-nome-title-p'>Nome de Usuário:</label>
                        </div>
                        <div className='caixacadastro-nome-entrada'>
                            <form>
                                <input 
                                    onChange={(e)=>handle(e)}
                                    className='caixacadastro-nome-entrada-input'
                                    name='username'
                                    id = 'username'
                                    type='text'
                                    placeholder=''
                                    required
                                    />
                            </form>
                        </div>
                    </div>

                    <div className='caixacadastro-usuario'>
                        <div className='caixacadastro-nome-title'>
                            <div className='caixacadastro-email-title-fig'></div>
                            <label className='caixacadastro-nome-title-p'>E-mail UFU:</label>
                        </div>
                        <div className='caixacadastro-nome-entrada'>
                            <form>
                                <input 
                                    onChange={(e)=>handle(e)}
                                    className='caixacadastro-nome-entrada-input'
                                    name='email'
                                    id = 'email'
                                    type='email'
                                    placeholder=''
                                    required
                                    />
                            </form>
                        </div>
                    </div>

                    <div className='caixacadastro-usuario'>
                        <div className='caixacadastro-nome-title'>
                            <div className='caixacadastro-senha-title-fig'></div>
                            <label className='caixacadastro-nome-title-p'>Senha:</label>
                        </div>
                        <div className='caixacadastro-nome-entrada'>
                            <form>
                                <input 
                                    onChange={(e)=>handle(e)}
                                    className='caixacadastro-nome-entrada-input'
                                    name='password'
                                    id = 'password'
                                    type='password'
                                    placeholder=''
                                    required
                                    />
                            </form>
                        </div>
                    </div>

                    <div className='caixacadastro-usuario'>
                        <div className='caixacadastro-nome-title'>
                            <div className='caixacadastro-senha-title-fig'></div>
                            <label className='caixacadastro-nome-title-p'>Repita a Senha:</label>
                        </div>
                        <div className='caixacadastro-nome-entrada'>
                            <form>
                                <input 
                                    className='caixacadastro-nome-entrada-input'
                                    name='senha2'
                                    type='password'
                                    placeholder=''
                                    required
                                    />
                            </form>
                        </div>
                    </div>

                    <div className='caixacadastro-selectbox'>

                        <label class="container" >
                            <p className='container-p'>Sou Aluno(a)</p>
                            <input type="radio"  name="radio" id='classificacao' value="aluno" onChange={(e)=>handle(e)} />
                            <span class="checkmark"></span>
                        </label>
                        <label class="container">
                            <p className='container-p'>Sou Professor(a)</p>
                            <input type="radio" name="radio" id='classificacao' value="professor" onChange={(e)=>handle(e)} />
                            <span class="checkmark"></span>
                        </label>
                        <label class="container">
                            <p className='container-p'>Outro</p>
                            <input type="radio" name="radio" id='classificacao' value="outro" onChange={(e)=>handle(e)} />
                            <span class="checkmark"></span>
                        </label>

                    </div>

                    <div className='caixacadastro-butlogin-container' onClick={(e)=>submit(e)}>
                        <div className='caixacadastro-butlogin-rect'>
                            <p className='caixacadastro-butlogin-p'>Cadastrar</p>
                        </div>
                    </div>

                    <div className='caixacadastro-infofaltantes'>
                        <p className='caixacadastro-infofaltantes-p'>Mensagem de erro.</p>
                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default CaixaCadastro