import { Request, Response } from 'express';
import { inject } from 'inversify';

import { controller, get, post } from '../../../lib/decorators';
import { ICompanyService } from '../services';
import { COMPANY_DI_TYPES } from '../types';
import { container } from '../../../inversify.config';

/**
 * A Singleton Controller class instantiated by the DI framework during application bootstrap
 */
@controller('')
export class CompanyController {
    private static instance: CompanyController;

    private constructor(
        @inject(COMPANY_DI_TYPES.ICompanyService)
        private companyService: ICompanyService
    ) {}

    static getInstance(): CompanyController {
        if (!CompanyController.instance) {
            CompanyController.instance = new CompanyController(
                container.get<ICompanyService>(COMPANY_DI_TYPES.ICompanyService)
            );
        }
        return CompanyController.instance;
    }

    @get('/company/:id')
    getCompanyById(req: Request, res: Response): void {
        const { id } = req.params;
        res.send(
            CompanyController.getInstance().companyService.getCompanyById(id)
        );
    }

    @post('/')
    getCompanies(req: Request, res: Response): void {
        res.send(
            CompanyController.getInstance().companyService.getCompanies(
                req.body
            )
        );
    }
}
