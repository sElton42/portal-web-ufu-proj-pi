// Listar Usuário   

const Url = 'http://ufuportalextra-env.eba-6prqdmyy.us-east-1.elasticbeanstalk.com/user/';

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
    response.data.forEach(function(user) {
        
    /* //Modele de json de usuários
    response.data{
      {
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
    */
        let item = document.createElement("li")
        item.classList("item")
        item.innerHTML = '<img src="'+user.foto+'"/><span>'+user.username+'<span/>'
        list.appendChild(item)
    });
})

