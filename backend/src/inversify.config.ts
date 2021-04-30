import { Container } from 'inversify';

import { COMPANY_DI_TYPES } from './modules/company/types';

import { ICompanyService, CompanyService } from './modules/company/services';
import {
    ICompanyRepository,
    CompanyRepository
} from './modules/company/repositories';
import { CompanyController } from './modules/company/controllers';

export class DiContainer {
    private container: Container;

    constructor() {
        this.container = new Container();
    }

    private bindDependencies() {
        this.container
            .bind<ICompanyService>(COMPANY_DI_TYPES.ICompanyService)
            .to(CompanyService);
        this.container
            .bind<ICompanyRepository>(COMPANY_DI_TYPES.ICompanyRepository)
            .to(CompanyRepository);
    }

    private bindContextToControllerMethods(controllers) {
        const companyService = this.container.get<ICompanyService>(
            COMPANY_DI_TYPES.ICompanyService
        );
        const companyController = new CompanyController(companyService);

        Object.getOwnPropertyNames(
            Object.getPrototypeOf(companyController)
        ).map(key => {
            console.log('key=', key);
            if (
                companyController[key] instanceof Function &&
                key !== 'constructor'
            )
                companyController[key] = companyController[key].bind(
                    companyController
                );
        });
    }

    bootstrap() {
        this.bindDependencies();
        this.bindContextToControllerMethods(CompanyController);
    }
}
