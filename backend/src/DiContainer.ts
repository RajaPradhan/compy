import { Container } from 'inversify';

import { COMPANY_DI_TYPES } from './modules/company/types';

import { ICompanyService, CompanyService } from './modules/company/services';
import {
    ICompanyRepository,
    CompanyRepository
} from './modules/company/repositories';
import { CompanyController } from './modules/company/controllers';

export class DiContainer {
    private static container: Container;
    private static controllersContext: { [key: string]: Object };

    static getContainer(): Container {
        if (!DiContainer.container) {
            DiContainer.container = new Container();
        }
        return DiContainer.container;
    }

    private static bindDependencies() {
        DiContainer.getContainer()
            .bind<CompanyController>(COMPANY_DI_TYPES.CompanyController)
            .to(CompanyController);
        DiContainer.getContainer()
            .bind<ICompanyService>(COMPANY_DI_TYPES.ICompanyService)
            .to(CompanyService);
        DiContainer.getContainer()
            .bind<ICompanyRepository>(COMPANY_DI_TYPES.ICompanyRepository)
            .to(CompanyRepository);
    }

    private static getControllerInstance<T>(controllerName: string): Object {
        return DiContainer.getContainer().get<T>(
            COMPANY_DI_TYPES[controllerName]
        );
    }

    private static createControllersContext() {
        DiContainer.controllersContext = {
            CompanyController: this.getControllerInstance<CompanyController>(
                'CompanyController'
            )
        };
    }

    static getControllerContext(controllerName: string): Object {
        return DiContainer.controllersContext[controllerName];
    }

    static bootstrap(): void {
        DiContainer.bindDependencies();
        DiContainer.createControllersContext();
    }
}
