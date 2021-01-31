const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const connection = require('./mongoDb/connection')


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

app.use(routes)

app.get('/',(req,res)=>{
    res.send({message: 'Bem vindo a API :)'})
})



app.listen(3333,()=>{
    console.log('Server is running on port 3333')
})