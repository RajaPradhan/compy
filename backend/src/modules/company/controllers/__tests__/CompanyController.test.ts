import { CompanyController } from '../CompanyController';
import { ICompanyService } from '../../services';
import { COMPANY_DI_TYPES } from '../../types';
import { DiContainer } from '../../../../inversify.config';

describe('Tests for CompanyController', () => {
    let companyController: CompanyController;
    let companyService: ICompanyService;

    beforeAll(() => {
        companyService = DiContainer.getInstance().get<ICompanyService>(
            COMPANY_DI_TYPES.ICompanyService
        );
        companyController = new CompanyController(companyService);
    });

    it('should call the getCompanyById method of CompanyService', () => {
        const mockReq = {
            params: {
                id: '123'
            }
        };

        const mockRes = {
            send: () => undefined
        };

        const spy = jest.spyOn(companyService, 'getCompanyById');

        companyController.getCompanyById(mockReq as any, mockRes as any);
        expect(companyService.getCompanyById).toHaveBeenCalled();

        spy.mockRestore();
    });

    it('should call the getCompanies method of CompanyService', () => {
        const mockReq = {
            body: {
                searchTerm: 'constructor',
                specialities: ['Excavation']
            }
        };

        const mockRes = {
            send: () => undefined
        };

        const spy = jest.spyOn(companyService, 'getCompanies');

        companyController.getCompanies(mockReq as any, mockRes as any);
        expect(companyService.getCompanies).toHaveBeenCalled();

        spy.mockRestore();
    });
});
