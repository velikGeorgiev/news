require('dotenv').config();

const apiApp = ({
        http,
        app, 
        routes, 
        helmet = null, // helmet is optional,
        apiVersion = 1, 
        bodyParser,
        morgan = null,
        cors = null,
        compression = null,
    }) => {
    
    /**
     * Optional middlewares
     */
    if (morgan != null) app.use(morgan('tiny'));
    if (helmet != null) app.use(helmet());
    if (cors != null) app.use(cors());
    if (compression != null) app.use(compression())
    
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(`/api/v${apiVersion}`, routes);

    return http.createServer(app);
}

module.exports = apiApp;