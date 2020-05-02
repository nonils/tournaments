//src/app.ts
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'reflect-metadata';
import {Container} from "inversify";
import {interfaces, InversifyExpressServer, TYPE} from "inversify-express-utils";
import {ITournamentService} from "./services/ITournamentService";
import {TournamentServiceImpl} from "./services/impl/TournamentServiceImpl";
import morgan from "morgan";
import "./env";

import * as swagger from "swagger-express-ts";
// declare metadata by @controller annotation
import {TYPES} from "./types/types";
import {TournamentController} from "./controller/TournamentController";
import {TournamentRepositoryImpl} from "./repository/impl/TournamentRepository.impl";
import {WrapperDB} from "./repository/WrappereDB";
import {ITournamentRepository} from "./repository/ITournamentRepository";
import {CompetitorServiceImpl} from "./services/impl/CompetitorServiceImpl";
import {CompetitorRepositoryImpl} from "./repository/impl/CompetitorRepositoryImpl";
import {ICompetitorRepository} from "./repository/ICompetitorRepository";
import {ICompetitorService} from "./services/ICompetitorService";
import {CompetitorController} from "./controller/CompetitorController";
import errorMiddleware from "./middleware/CustomExceptionMiddleware";

// set up container
let container = new Container();

// set up bindings
container.bind<WrapperDB>(TYPES.WrapperDB).to(WrapperDB)
container.bind<ITournamentRepository>(TYPES.ITournamentRepository).to(TournamentRepositoryImpl)
container.bind<ITournamentService>(TYPES.ITournamentService).to(TournamentServiceImpl)
container.bind<ICompetitorRepository>(TYPES.ICompetitorRepository).to(CompetitorRepositoryImpl)
container.bind<ICompetitorService>(TYPES.ICompetitorService).to(CompetitorServiceImpl)
container.bind<interfaces.Controller>(TYPE.Controller)
    .to(TournamentController).inSingletonScope().whenTargetNamed(TournamentController.TARGET_NAME);
container.bind<interfaces.Controller>(TYPE.Controller)
    .to(CompetitorController).inSingletonScope().whenTargetNamed(CompetitorController.TARGET_NAME);

class App {
    public app: InversifyExpressServer;

    constructor() {
        this.app = new InversifyExpressServer(container);
        this.app.setConfig(this.setConfig);
        this.app.setErrorConfig(this.configError);
    }


    private setConfig(app: express.Application) {
        app.use(bodyParser.json({limit: '50mb'}));
        app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
        const corsOptions: cors.CorsOptions = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: "*",
            preflightContinue: false
        };

        app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        app.use(cors(corsOptions));
        let logger = morgan('combined')
        app.use(logger);
        app.use('/api-docs/swagger', express.static('swagger'));
        app.use('/api-docs/swagger/assets', express.static('node_modules/swagger-ui-dist'));
        app.use(swagger.express(
            {
                definition: {
                    info: {
                        title: "My api",
                        version: "1.0"
                    },
                    externalDocs: {
                        url: "My url"
                    }
                    // Models can be defined here
                }
            }
        ));
    }

    private configError(app: express.Application) {
        app.use(errorMiddleware);
    }
}

export default new App().app.build();
