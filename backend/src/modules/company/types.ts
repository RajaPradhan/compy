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
