const express = require('express')
const mongoose = require('mongoose')
const app = express()
const UniversitiesRoutes = require('./src/routes/universities')

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())
app.get('/myserver/customers', UniversitiesRoutes)

mongoose.connect('mongodb+srv://cadastroUser:bziueg3ecrbCwjzJ@apicuster.o7ihy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority') //metodo connect do mongoose
    .then(() => {
        console.log('Conexão ao mongo atlas com sucesso!')
        app.listen(3000)
    })
    .catch((err) => console.log(err)) 