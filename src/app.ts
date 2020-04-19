//src/app.ts
import { HOST, PORT, SWAGGER_PREFIX} from './constants/system.constants';
import express, { Application } from 'express';
import { Routes } from './routes';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from './swagger.json'

class App {
    public app: Application;
    public controller: Routes;

    constructor() {
        this.app = express();
        this.setConfig();

        this.controller = new Routes(this.app);
        this.setSwaggerConfig();
    }

    private setConfig() {
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

        const corsOptions: cors.CorsOptions = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: "*",
            preflightContinue: false
        };

        this.app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        this.app.use(cors(corsOptions));
    }

    private setSwaggerConfig() {
        let options = { customCssUrl: '/swagger/custom.css', customJs: '/swagger/custom.js' };
        let swd: any = swaggerDocument;
        swd.host = `${HOST}:${PORT}`
        swd.basePath = `${SWAGGER_PREFIX}`;
        this.app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
    }
}

export default new App().app;
