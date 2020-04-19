//src/app.ts
import { HOST, PORT, SWAGGER_PREFIX} from './constants/system.constants';
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from './swagger.json'
import 'reflect-metadata';
import {Container} from "inversify";
import {InversifyExpressServer} from "inversify-express-utils";
import {ITournamentService} from "./services/ITournamentService";
import {TournamentServiceImpl} from "./services/impl/TournamentServiceImpl";
import morgan from "morgan";

// declare metadata by @controller annotation
import "./controller/tournament.controller";
import {log} from "util";
import {TYPES} from "./types/types";

// set up container
let container = new Container();

// set up bindings
container.bind<ITournamentService>(TYPES.ITournamentService).to(TournamentServiceImpl)


class App {
    public app: InversifyExpressServer;

    constructor() {
        this.app = new InversifyExpressServer(container);
        this.app.setConfig(this.setConfig);
        this.app.setConfig(this.setSwaggerConfig);
    }

    private setConfig(app: express.Application) {
        app.use(bodyParser.json({ limit: '50mb' }));
        app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

        const corsOptions: cors.CorsOptions = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: "*",
            preflightContinue: false
        };

        app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        app.use(cors(corsOptions));
        let logger = morgan('combined')
        app.use(logger);
    }

    private setSwaggerConfig(app: express.Application) {
        let options = { customCssUrl: '/swagger/custom.css', customJs: '/swagger/custom.js' };
        let swd: any = swaggerDocument;
        swd.host = `${HOST}:${PORT}`
        swd.basePath = `${SWAGGER_PREFIX}`;
        app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
    }
}

export default new App().app.build();
