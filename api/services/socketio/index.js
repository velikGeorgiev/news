const socketio = require('socket.io');
let ioConnection = null;

module.exports = () => {
    return {
        
        createConnection: (server) => {
            ioConnection = socketio(server, {
                cors: {
                  origin: '*',
                }
            });
            
            ioConnection.on('connection', (socket) => {
                console.log(`Client connected`);
            });
        },

        broadcast: (type, message) => {
            if (!ioConnection) return;
            
            ioConnection.emit(type, message);
        }

    }
}