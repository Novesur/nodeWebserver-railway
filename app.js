const express = require('express')
const hbs = require('hbs')
require('dotenv').config();

const port = process.env.PORT;
const app = express()

//Handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

///Servir contenido estatico
//Aca indicamos la ruta de donde va jalar la pagina
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home',{
    nombre : 'JORGE SARMIENTO',
    titulo : 'Curso de Node'
  });
  })



app.get('/generic', function (req, res) {
  res.render('generic',{
    nombre : 'JORGE SARMIENTO',
    titulo : 'Curso de Node'
  });
  })

  app.get('/elements', function (req, res) {
    res.render('elements',{
      nombre : 'JORGE SARMIENTO',
      titulo : 'Curso de Node'
    });
    })

  app.get('*', function (req, res) {
    res.sendFile(__dirname +'/public/404.html')
  })


  app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`)
  })