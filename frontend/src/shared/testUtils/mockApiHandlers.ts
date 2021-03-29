import { rest, RestRequest } from 'msw';

import { Company, Speciailty } from 'shared/types';
import { companies } from './mockData';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT as string;

const fetchCompanyById = (req: RestRequest, res: any, ctx: any) => {
  const company = companies.find(
    (company: Company) => company.id === req.params.id,
  );

  return res(ctx.status(200), ctx.json(company));
};

const fetchCompanies = (req: RestRequest, res: any, ctx: any) => {
  const { searchTerm, specialities } = req.body as any;

  const filterPipe = pipe(
    filterCompaniesBySpeciality,
    filterCompaniesBySearchTerm(searchTerm),
  );

  const result = filterPipe(specialities);

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

const filterCompaniesBySearchTerm = (searchTerm: string) => {
  return (companiesBySpeciality: Company[]): Company[] => {
    if (!searchTerm) {
      return companiesBySpeciality;
    }
    return companiesBySpeciality.filter((company: Company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  };
};

const pipe = (...functions: Function[]) => (input: any) =>
  functions.reduce((acc, fn) => fn(acc), input);

// bind handlers to paths
const mockApiHandlers = [
  rest.get(`${API_ENDPOINT}/company/:id`, fetchCompanyById),
  rest.post(`${API_ENDPOINT}/`, fetchCompanies),
];
export default mockApiHandlers;
