import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'reflect-metadata';

import { Router } from './Router';
import { DiContainer } from './inversify.config';

let app: Express;

const diContainer = new DiContainer();

try {
    if (diContainer) {
        diContainer.bootstrap();
        app = express();

        app.use(cors());

        app.use(bodyParser.json());
        app.use(Router.getInstance());
    }
} catch (e) {
    throw new Error('DI container could not be initialized!');
}

export { app };
