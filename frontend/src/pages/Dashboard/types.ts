export enum Speciailty {
  Excavation = 'Excavation',
  Plumbing = 'Plumbing',
  Electrical = 'Electrical',
  Architecture = 'Architecture',
}

export interface Filters {
  searchTerm: string;
  specialities: string[];
}

export interface Company {
  id: string;
  name: string;
  logoUrl: string;
  specialities: Speciailty[];
  city: string;
  description: string;
}

export interface CompaniesState {
  data: Company[] | null;
  loading: boolean;
  error: Error | null;
}

export enum CompaniesActionType {
  FETCH_COMPANIES_LOADING = 'FETCH_COMPANIES_LOADING',
  FETCH_COMPANIES_SUCCESS = 'FETCH_COMPANIES_SUCCESS',
  FETCH_COMPANIES_FAILURE = 'FETCH_COMPANIES_FAILURE',
}

export interface CompaniesAction {
  type:
    | 'FETCH_COMPANIES_LOADING'
    | 'FETCH_COMPANIES_SUCCESS'
    | 'FETCH_COMPANIES_FAILURE';
  payload?: any;
}

export type CompaniesDispatch = (action: CompaniesAction) => void;
