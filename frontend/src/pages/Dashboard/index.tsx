import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import {
  Grid,
  makeStyles,
  TextField,
  InputAdornment,
  Typography,
} from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

import CompanyDisplayCard from 'shared/components/CompanyDisplayCard';
import Error from 'shared/components/Error';
import Loader from 'shared/components/Loader';
import SpeciailtyFilters, { Specialities } from './SpeciailtyFilters';
import { useFetchCompanies } from 'shared/hooks';
import { Filters, Company } from 'shared/types';

const useStyles = makeStyles(() => ({
  dashboardContainer: {
    display: 'flex',
  },
  mainContainer: {
    display: 'flex',
  },
  searchBarContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  searchTextField: {
    width: '100%',
    margin: '40px 0',
  },
  resultCountContainer: {
    textAlign: 'right',
    marginBottom: '10px',
  },
  noDataFoundContainer: {
    width: '100%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  const { fetchCompanies, companiesState } = useFetchCompanies();

  const [filters, setFilters] = useState<Filters>({
    searchTerm: '',
    specialities: [],
  });

  useEffect(() => {
    fetchCompanies(filters);
    // Disabling lint as fetchCompanies cannot be used in the dep array
  }, [filters]); // eslint-disable-line

  const handleSearchTermChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, searchTerm: value });
  };

  const handleSpecialitiesChange = (specialitiesState: Specialities) => {
    const selectedSpecialities = [];
    for (const [key, value] of Object.entries(specialitiesState)) {
      if (value) {
        selectedSpecialities.push(key);
      }
    }
    setFilters({ ...filters, specialities: selectedSpecialities });
  };

  const getContent = () => {
    if (companiesState.loading) {
      return <Loader repeat={5} />;
    }

    if (companiesState.error) {
      return <Error message="Something went wrong! Please try again." />;
    }

    if (companiesState.data && companiesState.data.length === 0) {
      return (
        <div className={classes.noDataFoundContainer}>
          <Typography variant="h6">No data found</Typography>
        </div>
      );
    }

    if (companiesState.data && companiesState.data.length > 0) {
      return companiesState.data.map((company: Company) => {
        return <CompanyDisplayCard key={company.id} company={company} />;
      });
    }
  };

  return (
    <Grid container className={classes.dashboardContainer}>
      <Grid item xs={12} className={classes.searchBarContainer}>
        <Grid item xs={9}>
          <TextField
            data-testid="search-field"
            className={classes.searchTextField}
            placeholder="Search by company name"
            onChange={debounce(handleSearchTermChange, 100)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.resultCountContainer}>
        <Typography variant="h6" data-testid="total-result">{`Total result: ${
          companiesState.data?.length || 0
        }`}</Typography>
      </Grid>
      <Grid item xs={12} className={classes.mainContainer}>
        <Grid item xs={3}>
          <SpeciailtyFilters onSpecialitiesChange={handleSpecialitiesChange} />
        </Grid>
        <Grid item xs={9}>
          {getContent()}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
