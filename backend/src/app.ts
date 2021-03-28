import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'reflect-metadata';

import { Router } from './Router';
import './inversify.config';

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(Router.getInstance());

export { app };
