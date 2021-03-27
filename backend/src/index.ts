import express from 'express';
import bodyParser from 'body-parser';

import { Router } from './Router';
import { CompanyController } from './modules/company/controllers';

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(Router.getInstance());

new CompanyController();

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
