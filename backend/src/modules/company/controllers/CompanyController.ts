import { Request, Response } from 'express';

import { controller, get, post } from '../../../lib/decorators';
import { CompanyService, ICompanyService } from '../services';

@controller('')
export class CompanyController {
    companyService: ICompanyService;

    constructor() {
        this.companyService = new CompanyService();
    }

    @get('/company/:id')
    getCompanyById(req: Request, res: Response): void {
        const { id } = req.params;
        res.send(this.companyService.getCompanyById(id));
    }

    @post('/')
    getCompanies(req: Request, res: Response): void {
        const { filters } = req.body;
        res.send(this.companyService.getCompanies(filters));
    }
}
