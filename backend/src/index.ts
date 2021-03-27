import express from 'express';
import bodyParser from 'body-parser';

import { Router } from './Router';

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(Router.getInstance());

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
