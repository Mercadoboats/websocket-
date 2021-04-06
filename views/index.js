const socket = io();

function addProducto(){
    var producto={
        title: document.getElementById('title').value,
        price: document.getElementById('price').value,
        thumbnail: document.getElementById('thumbnail').value
    }

    
    socket.emit('producto',producto);
    
}

socket.on('pruducto', productos =>{
    res.render('tablaProductos', {productos});

})

