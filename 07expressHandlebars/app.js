const express = require('express')

const handle = require('express-handlebars')

const app = express()

app.engine('handlebars', handle.engine({defaultLayout : 'main'}))

app.set('view engine', 'handlebars')

app.get('/', (req, res)=>{
  res.render('home')
})

app.get('/about', (req, res)=>{
  res.render('about')
})

app.listen(3000)
