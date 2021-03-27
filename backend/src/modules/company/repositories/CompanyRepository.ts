import { Company } from '../models';
import { Speciailty, CompanyFilters } from '../types';
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
        if (!specialities.length) {
            return companies;
        }
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
        if (!searchTerm) {
            return companiesBySpeciality;
        }
        return companiesBySpeciality.filter((company: Company) =>
            company.name.includes(searchTerm)
        );
    }

    getCompanies({ searchTerm, specialities }: CompanyFilters): Company[] {
        const companiesBySpeciality = this.filterCompaniesBySpeciality(
            specialities.split(',') as Speciailty[]
        );

        const companiesBySearchTerm = this.filterCompaniesBySearchTerm(
            companiesBySpeciality,
            searchTerm
        );

        return companiesBySearchTerm;
    }
}
