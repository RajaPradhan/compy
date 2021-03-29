import React, { useEffect } from 'react';
import { Grid, makeStyles, Button } from '@material-ui/core';
import { NavigateBefore } from '@material-ui/icons';
import { useParams, useHistory } from 'react-router-dom';

import CompanyDisplayCard from 'shared/components/CompanyDisplayCard';
import { useFetchCompanies } from 'shared/hooks';
import Error from 'shared/components/Error';
import Loader from 'shared/components/Loader';

const useStyles = makeStyles(() => ({
  navigationContainer: {
    padding: '40px 0',
  },
}));

const CompanyDetails = () => {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const { fetchCompanyById, companiesState } = useFetchCompanies();

  useEffect(() => {
    fetchCompanyById(id);
    // Disabling lint as fetchCompanyById cannot be used in the dep array
  }, [id]); // eslint-disable-line

  const handleBackNavigation = () => history.push('/');

  const getContent = () => {
    if (companiesState.loading) {
      return <Loader />;
    }

    if (companiesState.error) {
      return <Error message="Something went wrong! Please try again." />;
    }

    if (companiesState.data) {
      return (
        <CompanyDisplayCard
          company={companiesState.data}
          showCompanyDescription={true}
        />
      );
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} className={classes.navigationContainer}>
        <Button
          data-testid="navigate-back-button"
          variant="outlined"
          startIcon={<NavigateBefore />}
          onClick={handleBackNavigation}
        >
          Back to dashboard
        </Button>
      </Grid>
      <Grid item xs={12}>
        {getContent()}
      </Grid>
    </Grid>
  );
};

export default CompanyDetails;
