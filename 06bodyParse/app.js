const express = require('express')


// body-parse
const body = require('body-parser')
const bodyParser = require('body-parser')

const app = express()

// conf body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/form.html')
})


app.post('/receber', (req, res) => {
    res.write('Nome: '+req.body.nome)
    res.end()
})

app.listen(8080)