import 'reflect-metadata';

import { CompanyService, ICompanyService } from '../CompanyService';
import { ICompanyRepository } from '../../repositories';
import { COMPANY_DI_TYPES, Speciailty } from '../../types';
import { DiContainer } from '../../../../DiContainer';

describe('Tests for CompanyService', () => {
    let companyService: ICompanyService;
    let companyRepository: ICompanyRepository;

    beforeAll(() => {
        DiContainer.bootstrap();
        companyRepository = DiContainer.getContainer().get<ICompanyRepository>(
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
            specialities: [Speciailty.Excavation]
        };

        companyService.getCompanies(filters);
        expect(companyRepository.getCompanies).toHaveBeenCalled();

        spy.mockRestore();
    });
});
