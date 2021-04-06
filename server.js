const express = require('express');
const app = express();
const http= require('http').Server(app);
const io= require('socket.io')(http);
const Productos = require('./api/productos')
const hbs = require('express-handlebars');
const PORT=3000;

const productos=[
    
]

app.engine('hbs', hbs({
    extname: '.hbs',
    partialsDir:` ${__dirname}/views/partials`
}));

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: false }));

app.set('views', './views');

app.get('/',(req,res)=>{
    res.render('home');
   
 });

 io.on('connection', socket=>{
     console.log('Nuevo cliente conectado');

     socket.on('producto',function(producto){
         productos.push(producto);
         io.sockets.emit('producto',productos);

     });
 })



const server=http.listen(PORT,()=>{console.log(`Servidor corriendo en:${PORT}`)})
.on('error',error=>{console.log(`Error:${error}`)});


