import { Container } from 'inversify';

import { COMPANY_DI_TYPES } from './modules/company/types';
import { ICompanyService, CompanyService } from './modules/company/services';
import {
    ICompanyRepository,
    CompanyRepository
} from './modules/company/repositories';
import './modules/company/controllers';

const container = new Container();
container
    .bind<ICompanyService>(COMPANY_DI_TYPES.ICompanyService)
    .to(CompanyService);
container
    .bind<ICompanyRepository>(COMPANY_DI_TYPES.ICompanyRepository)
    .to(CompanyRepository);

export { container };
