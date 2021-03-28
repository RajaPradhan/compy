import { rest, RestRequest } from 'msw';

import { Company, Speciailty } from '../../pages/Dashboard/types';
import { companies } from './mockData';

const API_ENDPOINT = 'http://localhost:4000';

const fetchCompanyById = (req: RestRequest, res: any, ctx: any) => {
  const company = companies.find(
    (company: Company) => company.id === req.params.id,
  );

  return res(ctx.status(200), ctx.json(company));
};

const fetchCompanies = (req: RestRequest, res: any, ctx: any) => {
  const urlSearchParams = new URLSearchParams(req.body as any);

  const searchTerm = urlSearchParams.get('searchTerm') || '';
  const specialities = urlSearchParams.get('specialities') || '';

  const companiesBySpeciality = filterCompaniesBySpeciality(
    specialities.length ? (specialities.split(',') as Speciailty[]) : [],
  );

  const result = filterCompaniesBySearchTerm(companiesBySpeciality, searchTerm);

  return res(ctx.status(200), ctx.json(result));
};

const filterCompaniesBySpeciality = (specialities: Speciailty[]): Company[] => {
  if (!specialities.length) {
    return companies;
  }
  return companies.filter((company: Company) =>
    specialities.some((speciailty: Speciailty) =>
      company.specialities.includes(speciailty),
    ),
  );
};

const filterCompaniesBySearchTerm = (
  companiesBySpeciality: Company[],
  searchTerm: string,
): Company[] => {
  if (!searchTerm) {
    return companiesBySpeciality;
  }
  return companiesBySpeciality.filter((company: Company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
};

// bind handlers to paths
const mockApiHandlers = [
  rest.get(`${API_ENDPOINT}/company/:id`, fetchCompanyById),
  rest.post(`${API_ENDPOINT}/`, fetchCompanies),
];
export default mockApiHandlers;
