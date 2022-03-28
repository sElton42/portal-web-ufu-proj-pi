const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()

const { resolve, dirname } = require('path')

app.use(cors())
app.get('/sms', (req,res)=>{   
     
    axios.post('http://ufuportalextra-env.eba-6prqdmyy.us-east-1.elasticbeanstalk.com/user/cadastrar',{    
        
        username: "teste",
        password: "teste",
        nome: "teste",
        email:"teste",
        classificacao: "teste",
        foto: "teste"
    })
    .then(function(response){
        console.log(response.data)
        console.log(response.headers)
        console.log(response.status)
    }).catch(function(error){
        if(error){
            console.log(error)
        }
    })
    
    return res.json({teste:1})
}) 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post("/", (req, res) => {
    // perform operation and return response.
    res.status(200).json({ message: "It worked!" });
  });
  
  app.listen(3000, function() {
      console.log("server is running");
    });

app.use('/', 
express.static(
        resolve(
            __dirname,
            './build'
        )
    )
)

app
    .listen(process.env.PORT || 3000, (err) => {
        if(err) { return console.log(err) }
        console.log('tudo funcionando certinho!')
    })