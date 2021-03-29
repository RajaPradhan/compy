import 'reflect-metadata';

import { CompanyService, ICompanyService } from '../CompanyService';
import { ICompanyRepository } from '../../repositories';
import { COMPANY_DI_TYPES } from '../../types';
import { container } from '../../../../inversify.config';

describe('Tests for CompanyService', () => {
    let companyService: ICompanyService;
    let companyRepository: ICompanyRepository;

    beforeAll(() => {
        companyRepository = container.get<ICompanyRepository>(
            COMPANY_DI_TYPES.ICompanyRepository
        );
        companyService = new CompanyService(companyRepository);
    });

    it('should call the getCompanyById method of CompanyRepository', () => {
        const spy = jest.spyOn(companyRepository, 'getCompanyById');

        companyService.getCompanyById('123');
        expect(companyRepository.getCompanyById).toHaveBeenCalled();

        spy.mockRestore();
    });

    it('should call the getCompanies method of CompanyRepository', () => {
        const spy = jest.spyOn(companyRepository, 'getCompanies');

        const filters = {
            searchTerm: 'constructor',
            specialities: ['Excavation']
        };

        companyService.getCompanies(filters);
        expect(companyRepository.getCompanies).toHaveBeenCalled();

        spy.mockRestore();
    });
});
