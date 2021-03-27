import { Speciailty } from '../types';

export interface Company {
    id: string;
    name: string;
    logoUrl: string;
    specialities: Speciailty[];
    city: string;
    description: string;
}
