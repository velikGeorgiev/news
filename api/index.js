require('dotenv').config();

const socketioapp = require('./services/socketio');

/**
 * Connection with mongo
 */
let mongoConnection = require('./MongoConnection');


/**
 * Create the web app
 */
const app = require('./app')({
    http: require('http'),
    app: require('express')(), 
    routes: require('./routes'),
    helmet: require('helmet'), // Adds HTTP secure headers 
    bodyParser: require('body-parser'),
    morgan: require('morgan'), // Simple requests console log 
    cors: require('cors'), // Enable API endpoits to be public
    compression: require("compression"), // Make request lighter by compressing them in gzip format
});

const httpServer = app.listen(process.env.HTTP_PORT, () => {
    console.dir(`Listening on port ${process.env.HTTP_PORT}`);
});

/**
 * Create socket.io
 */
socketioapp().createConnection(app);
