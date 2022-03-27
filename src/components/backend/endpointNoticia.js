// Listar Noticias      

const Url = 'http://ufuportalextra-env.eba-6prqdmyy.us-east-1.elasticbeanstalk.com/news/';

//Parametros opcionais
const otherParam = {
    headers:{
        "content-type":"application/json; charset=UTF-8"      
    },
    method: "GET"
}
fetch(Url, otherParam)
.then(data=>{return data.json()})
.then(function(response){
    /* //Modele de json de Projetos
    response.data{
    
    {
        "id": 1
        "ilustracoes": null,
        "titulo": "\"titulo\"",
        "conteudo": "\"Um conteudo\"",
        "links": "\"link\"",
        "imagem": null,
        "autor": {
            "id": 1,
            "username": "admin",
            "password": "admin",
            "enabled": true,
            "nome": "Administrador",
            "email": "admin@mail.com",
            "classificacao": "ADM",
            "foto": null,
            "roles": [
                {
                    "id": 1,
                    "name": "ADMIN"
                }
            ]
        }
    }
      
    }
    */
    response.data.forEach(function(user) {
        let item = document.createElement("li")
        item.classList("item")
        item.innerHTML = '<img src="'+user.foto+'"/><span>'+user.username+'<span/>'
        list.appendChild(item)
    });
})

