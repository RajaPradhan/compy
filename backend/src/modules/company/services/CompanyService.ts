import { CompanyRepository, ICompanyRepository } from '../repositories';
import { Company } from '../models';
import { CompanyFilters } from '../types';

export interface ICompanyService {
    getCompanyById(id: string): Company;
    getCompanies(filters: CompanyFilters): Company[];
}

export class CompanyService implements ICompanyService {
    companyRepository: ICompanyRepository;

    constructor() {
        this.companyRepository = new CompanyRepository();
    }

    getCompanyById(id: string): Company {
        return this.companyRepository.getCompanyById(id);
    }

    getCompanies(filters: CompanyFilters): Company[] {
        return this.companyRepository.getCompanies(filters);
    }
}
