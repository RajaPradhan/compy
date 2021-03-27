import { injectable, inject } from 'inversify';

import { ICompanyRepository } from '../repositories';
import { Company } from '../models';
import { CompanyFilters, COMPANY_DI_TYPES } from '../types';

export interface ICompanyService {
    getCompanyById(id: string): Company;
    getCompanies(filters: CompanyFilters): Company[];
}

@injectable()
export class CompanyService implements ICompanyService {
    constructor(
        @inject(COMPANY_DI_TYPES.ICompanyRepository)
        private companyRepository: ICompanyRepository
    ) {}

    getCompanyById(id: string): Company {
        return this.companyRepository.getCompanyById(id);
    }

    getCompanies(filters: CompanyFilters): Company[] {
        return this.companyRepository.getCompanies(filters);
    }
}
