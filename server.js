const express = require('express')

const { resolve, dirname } = require('path')

const cors = require('cors')

const app = express()

app.use(cors())

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