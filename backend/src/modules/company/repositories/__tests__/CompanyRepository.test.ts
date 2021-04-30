import 'reflect-metadata';

import { CompanyRepository, ICompanyRepository } from '../CompanyRepository';
import { companies } from '../../../../data/companies';
import { Speciailty } from '../../types';

describe('Tests for CompanyRepository', () => {
    let companyRepository: ICompanyRepository;
    beforeEach(() => {
        companyRepository = new CompanyRepository();
    });
    it('should return a company by given id', () => {
        const result = companyRepository.getCompanyById(
            '01F1CPNKBSZB15BHHB7DN9X601'
        );
        expect(result).toEqual(companies[0]);
    });

    it('should return a list of companies based on given filter', () => {
        const filters = {
            searchTerm: 'construct',
            specialities: [Speciailty.Excavation, Speciailty.Plumbing]
        };

        const result = companyRepository.getCompanies(filters);
        expect(result).toHaveLength(6);
    });

    it('should return all the companies', () => {
        const filters = {
            searchTerm: '',
            specialities: []
        };

        const result = companyRepository.getCompanies(filters);
        expect(result).toHaveLength(10);
    });
});
