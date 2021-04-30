import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'reflect-metadata';

import { DiContainer } from './DiContainer';
import { Router } from './Router';

let app: Express;

try {
    if (DiContainer.getContainer()) {
        DiContainer.bootstrap();
        app = express();

        app.use(cors());

        app.use(bodyParser.json());
        app.use(Router.getInstance());
    }
} catch (e) {
    throw new Error('DI container could not be initialized!');
}

export { app };
