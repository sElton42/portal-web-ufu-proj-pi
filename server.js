const express = require('express')

const { resolve, dirname } = require('path')

const cors = require('cors')

const app = express()

app.use(cors(
    {
        origin: "*",
    }
))

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