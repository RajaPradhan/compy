import { Company, Speciailty, CompanyFilters } from '../models';
import { companies } from '../../../data/companies';

export interface ICompanyRepository {
    getCompanyById(id: string): Company;
    getCompanies(filters: CompanyFilters): Company[];
}

export class CompanyRepository implements ICompanyRepository {
    getCompanyById(id: string): Company {
        return companies.find(
            (company: Company) => company.id === id
        ) as Company;
    }

    private filterCompaniesBySpeciality(specialities: Speciailty[]): Company[] {
        return companies.filter((company: Company) =>
            specialities.some((speciailty: Speciailty) =>
                company.specialities.includes(speciailty)
            )
        );
    }

    private filterCompaniesBySearchTerm(
        companiesBySpeciality: Company[],
        searchTerm: string
    ): Company[] {
        return companiesBySpeciality.filter(
            (company: Company) => company.name === searchTerm
        );
    }

    getCompanies({ searchTerm, specialities }: CompanyFilters): Company[] {
        const companiesBySpeciality = this.filterCompaniesBySpeciality(
            specialities
        );

        const companiesBySearchTerm = this.filterCompaniesBySearchTerm(
            companiesBySpeciality,
            searchTerm
        );

        return companiesBySearchTerm;
    }
}
