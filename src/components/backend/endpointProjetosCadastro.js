// Listar Projetos

let ilustracoes = document.querySelector("#ilustracoes")
let titulo = document.querySelector("#titulo")
let conteudo = document.querySelector("#conteudo")
let links = document.querySelector("#links")
let imagem = document.querySelector("#imagem")
let autor = document.querySelector("#autor")
let form = document.querySelector("#form")

form.addEventListener("submit", function(event){
    event.preventDefault()
    const Url = 'http://ufuportalextra-env.eba-6prqdmyy.us-east-1.elasticbeanstalk.com/sales/cadastrar';
    const Data = {
        ilustracoes : ilustracoes.value,
        titulo : titulo.value,
        conteudo : conteudo.value,
        links : links.value,
        imagem : imagem.value,
        autor : autor.value
    }
    //Parametros opcionais
    const otherParam = {
        headers:{
            "content-type":"application/json; charset=UTF-8",      
        },
        body: Data,
        method: "POST"
    }
    fetch(Url, otherParam)
    .then(data=>{return data.json()})
    .then(function(response){
        alert("Classificado cadastro efetuado com sucesso!")
    })
})