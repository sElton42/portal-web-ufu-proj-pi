// LOGIN

let nomeusuario = document.querySelector("#nome")
let senha = document.querySelector("#senha")
let form = document.querySelector("#form")

form.addEventListener("submit", function(event){
    event.preventDefault()
    const Url = 'http://ufuportalextra-env.eba-6prqdmyy.us-east-1.elasticbeanstalk.com/user/acount/'+nomeusuario;
    const Data = {
        username: nomeusuario.value,
        password: senha.value
    }
    //Parametros opcionais
    const otherParam = {
        headers:{
            "content-type":"application/json; charset=UTF-8",
            body: Data
            // body: JSON.stringify(dados)       
        },
        // body: Data,
        method: "GET"
    }
    fetch(Url, otherParam)
    .then(data=>{return data.json()})
    // .then(res=>{console.log(res)})
    // .catch(error=>console.log(error))
    .then(function(response){
        response.data.forEach(function(user) {
            let item = document.createElement("li")
            item.classList("item")
            item.innerHTML = '<img src="'+user.foto+'"/><span>'+user.username+'<span/>'
            list.appendChild(item)
        });
    })
})