import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';

import { controller, get, post } from '../../../lib/decorators';
import { ICompanyService } from '../services';
import { COMPANY_DI_TYPES } from '../types';

@controller('')
@injectable()
export class CompanyController {
    constructor(
        @inject(COMPANY_DI_TYPES.ICompanyService)
        public companyService: ICompanyService
    ) {}

    @get('/company/:id')
    getCompanyById(req: Request, res: Response): void {
        const { id } = req.params;
        res.send(this.companyService.getCompanyById(id));
    }

    @post('/')
    getCompanies(req: Request, res: Response): void {
        const filters = req.body;
        res.send(this.companyService.getCompanies(filters));
    }
}
