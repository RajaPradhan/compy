import { useReducer } from 'react';

import useCompanyReducer from './useCompanyReducer';
import { CompaniesActionType, Filters } from 'shared/types';

const useFetchCompanies = () => {
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT as string;
  const { companyReducer, state: initialCompaniesState } = useCompanyReducer();
  const [companiesState, companiesDispatch] = useReducer(
    companyReducer,
    initialCompaniesState,
  );

  const fetchCompanies = async ({ searchTerm, specialities }: Filters) => {
    const filterPayload = new URLSearchParams();
    filterPayload.append('searchTerm', searchTerm);
    filterPayload.append('specialities', specialities.toString());

    companiesDispatch({ type: CompaniesActionType.FETCH_COMPANIES_LOADING });
    try {
      const companies = await fetch(API_ENDPOINT, {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: filterPayload,
      });
      const payload = await companies.json();
      companiesDispatch({
        type: CompaniesActionType.FETCH_COMPANIES_SUCCESS,
        payload,
      });
    } catch (error) {
      companiesDispatch({ type: CompaniesActionType.FETCH_COMPANIES_FAILURE });
    }
  };

  const fetchCompanyById = async (id: string) => {
    companiesDispatch({ type: CompaniesActionType.FETCH_COMPANIES_LOADING });
    try {
      const companies = await fetch(`${API_ENDPOINT}/company/${id}`);
      const payload = await companies.json();
      companiesDispatch({
        type: CompaniesActionType.FETCH_COMPANIES_SUCCESS,
        payload,
      });
    } catch (error) {
      companiesDispatch({ type: CompaniesActionType.FETCH_COMPANIES_FAILURE });
    }
  };

  return { fetchCompanies, fetchCompanyById, companiesState };
};

export default useFetchCompanies;
