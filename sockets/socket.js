const { io } = require('../index');


io.on('connection', client => {
    // client.on('event', data => { })
    console.log('cliente conectado');
    client.on('disconnect', data => {
        console.log('cliente desconectado');
    });


    client.on('mensaje', (payload) => {
        console.log('mensaje', payload);
    });
    io.emit('mensaje', { admin: 'nuevo mensaje' })

});
