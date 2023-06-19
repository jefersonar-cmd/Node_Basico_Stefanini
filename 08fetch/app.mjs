import express from 'express'
import fetch from 'node-fetch'

const app = express()

app.get('/', function (req, res) {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(resposta => resposta.json())
  .then(resposta => console.table(resposta))

  res.end()
})

app.listen(3000)
