import React from 'react';
import { Grid, makeStyles, Typography, Card } from '@material-ui/core';
import {
  Check as CheckIcon,
  LocationCity as LocationIcon,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { Company } from 'pages/Dashboard/types';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
  },
  card: {
    marginBottom: '20px',
  },
  contentContainer: {
    padding: '20px',
  },
  logo: {
    width: '150px',
    height: '150px',
  },
  specialityContainer: {
    display: 'flex',
    '& svg': {
      paddingRight: '4px',
      fontSize: '20px',
    },
  },
  descriptionContainer: {
    padding: '20px 0',
  },

  locationContainer: {
    display: 'flex',
    '& svg': {
      paddingRight: '4px',
      fontSize: '20px',
    },
  },
}));

interface Props {
  company: Company;
  showCompanyDescription?: boolean;
}

const CompanyDisplayCard = ({
  company,
  showCompanyDescription = false,
}: Props) => {
  const classes = useStyles();

  const { id, name, logoUrl, specialities, city, description } = company;

  const setFallbackImage = () =>
    require('./assets/company-placeholder.png').default; // eslint-disable-line

  return (
    <Link to={`/company/${id}`} className={classes.link}>
      <Card variant="outlined" className={classes.card}>
        <Grid container className={classes.contentContainer}>
          <Grid item xs={3}>
            <img
              className={classes.logo}
              src={logoUrl}
              alt="company-logo"
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.src = setFallbackImage();
              }}
            />
          </Grid>
          <Grid item xs={9}>
            <Grid item xs={12}>
              <Typography variant="h6" color="primary">
                {name}
              </Typography>
            </Grid>
            {showCompanyDescription && (
              <Grid item xs={12} className={classes.descriptionContainer}>
                <Typography variant="body1">{description}</Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Specialities</strong>
              </Typography>

              {specialities.map((speciality: string) => {
                return (
                  <div className={classes.specialityContainer}>
                    <CheckIcon />
                    <Typography variant="body1">{speciality}</Typography>
                  </div>
                );
              })}
            </Grid>
            <Grid className={classes.locationContainer}>
              <LocationIcon />
              <Typography variant="body1">{city}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Link>
  );
};

export default CompanyDisplayCard;
