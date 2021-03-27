import express from 'express';
import bodyParser from 'body-parser';
import 'reflect-metadata';

import { Router } from './Router';
import './inversify.config';

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(Router.getInstance());

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
