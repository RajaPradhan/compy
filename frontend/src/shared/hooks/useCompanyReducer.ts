import {
  CompaniesState,
  CompaniesAction,
  CompaniesActionType,
} from 'pages/Dashboard/types';

const useCompanyReducer = () => {
  const state: CompaniesState = {
    data: null,
    loading: false,
    error: null,
  };

  const companyReducer = (state: CompaniesState, action: CompaniesAction) => {
    switch (action.type) {
      case CompaniesActionType.FETCH_COMPANIES_LOADING: {
        return { ...state, loading: true };
      }
      case CompaniesActionType.FETCH_COMPANIES_SUCCESS: {
        return { ...state, loading: false, data: action.payload };
      }
      case CompaniesActionType.FETCH_COMPANIES_FAILURE: {
        return {
          ...state,
          loading: false,
          data: null,
          error: new Error('Failed to fetch companies'),
        };
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
    }
  };
  return { companyReducer, state };
};

export default useCompanyReducer;
