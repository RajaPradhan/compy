export const enum Speciailty {
    Excavation = 'Excavation',
    Plumbing = 'Plumbing',
    Electrical = 'Electrical',
    Architecture = 'Architecture'
}

export interface CompanyFilters {
    searchTerm: string;
    specialities: string;
}

export const COMPANY_DI_TYPES = {
    ICompanyService: Symbol.for('ICompanyService'),
    ICompanyRepository: Symbol.for('ICompanyRepository')
};
