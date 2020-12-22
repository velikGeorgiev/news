require('dotenv').config({path: `${__dirname}/.env`});

const mongoose = require('mongoose');

let mongoConnection;
    
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

mongoConnection = mongoose.connection;

mongoConnection.on('open', () => {
    console.dir('Connected to mongo');
});

module.exports = mongoConnection;