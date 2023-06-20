import express from 'express'
import handlebars from 'express-handlebars'
import body from 'body-parser'
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

var app = express()

app.use(body.urlencoded({extended: false}))
app.use(body.json())

app.engine('handlebars', handlebars.engine({defaultLayout: 'principal'}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res)=>{
    fetch('http://localhost:3000/clientes', {method: 'GET'})
    .then(resposta => resposta.json())
    .then(resposta => res.render('inicio', {dados:resposta}))
})

app.post('/cadastrar', (req, res) =>{
    let nome = req.body.nome
    let idade = req.body.idade

    let dados = {'nome': nome, 'idade': idade}

    fetch('http://localhost:3000/clientes', {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {'Content-Type':'application/json'}
    })
    .then(res.redirect('/'))
})

app.get('/selecionar/:id', (req, res) => {
    let id = req.params.id

    fetch('http://localhost:3000/clientes/'+id, {
        method: 'GET'
    })
    .then(resposta => resposta.json())
    .then(resposta => res.render('selecionar', {dados:resposta}))
})

app.post('/editar', (req, res) => {
    let id = req.body.id
    let nome = req.body.nome
    let idade = req.body.idade

    fetch('http://localhost:3000/clientes/'+id, {
        method: 'PUT',
        body: JSON.stringify({'nome': nome, 'idade': idade}),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res.redirect('/'))
})

app.get('/deletar/:id', (req, res) => {
    let id = req.params.id

    fetch('http://localhost:3000/clientes/'+id, {
        method: 'DELETE'
    })
    .then(res.redirect('/'))
})

app.listen(8080)