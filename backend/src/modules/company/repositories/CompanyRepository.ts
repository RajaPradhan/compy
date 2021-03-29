import { injectable } from 'inversify';

import { Company } from '../models';
import { Speciailty, CompanyFilters } from '../types';
import { companies } from '../../../data/companies';
import { pipe } from '../../../utils';

export interface ICompanyRepository {
    getCompanyById(id: string): Company;
    getCompanies(filters: CompanyFilters): Company[];
}

@injectable()
export class CompanyRepository implements ICompanyRepository {
    getCompanyById(id: string): Company {
        return companies.find(
            (company: Company) => company.id === id
        ) as Company;
    }

    getCompanies({ searchTerm, specialities }: CompanyFilters): Company[] {
        // The pipe filters the companies by specialities first and then pass the result to filter by search term
        const filterPipe = pipe(
            this.filterCompaniesBySpeciality,
            this.filterCompaniesBySearchTerm(searchTerm)
        );

        const filteredResult = filterPipe(specialities);

        return filteredResult;
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

    private filterCompaniesBySearchTerm(searchTerm: string) {
        return (companiesBySpeciality: Company[]): Company[] => {
            if (!searchTerm) {
                return companiesBySpeciality;
            }
            return companiesBySpeciality.filter((company: Company) =>
                company.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        };
    }
}
