const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => res.render('about'))

app.get('/round1', (req, res) => res.render('round1'))

app.get('/round2', (req, res) => res.render('round2'))

app.get('/round3', (req, res) => res.render('round3'))

app.get('/round4', (req, res) => res.render('round4'))


app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`))