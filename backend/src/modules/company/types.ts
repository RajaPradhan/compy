export const enum Speciailty {
    Excavation = 'Excavation',
    Plumbing = 'Plumbing',
    Electrical = 'Electrical',
    Architecture = 'Architecture'
}

export interface CompanyFilters {
    searchTerm: string;
    specialities: Speciailty[];
}

export const COMPANY_DI_TYPES = {
    CompanyController: Symbol.for('CompanyController'),
    ICompanyService: Symbol.for('ICompanyService'),
    ICompanyRepository: Symbol.for('ICompanyRepository')
};
