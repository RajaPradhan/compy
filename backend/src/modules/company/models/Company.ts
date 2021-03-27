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

export interface Company {
    id: string;
    name: string;
    logoUrl: string;
    specialities: Speciailty[];
    city: string;
    description: string;
}
