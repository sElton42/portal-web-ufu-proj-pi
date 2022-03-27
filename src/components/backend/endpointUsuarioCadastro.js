// Listar Usuário   

let username = document.querySelector("#username")
let senha = document.querySelector("#senha")
let email = document.querySelector("#email")
let nome = document.querySelector("#nome")
let imagem = document.querySelector("#imagem")
let form = document.querySelector("#form")

form.addEventListener("submit", function(event){
    event.preventDefault()
    const Url = 'http://ufuportalextra-env.eba-6prqdmyy.us-east-1.elasticbeanstalk.com/user/cadastrar';
    const roles = {
        name: "ADMIN"
    }
    const Data = {
        username : username.value,
        password : senha.value,
        email : email.value,
        nome : nome.value,
        foto : imagem.value,
        classificacao: "USER",
        roles: roles.value
        
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

