import React, { useState } from 'react';
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from '@material-ui/core';
import { FilterList as FilterIcon } from '@material-ui/icons';

import { Speciailty } from 'shared/types';

const useStyles = makeStyles(() => ({
  card: {
    marginRight: '30px',
  },
  filterHeader: {
    display: 'flex',
    borderBottom: '1px solid #e2e1e1',
    '& svg': {
      paddingRight: '12px',
      fontSize: '20px',
    },
  },
}));

export interface Specialities {
  [Speciailty.Architecture]: boolean;
  [Speciailty.Electrical]: boolean;
  [Speciailty.Excavation]: boolean;
  [Speciailty.Plumbing]: boolean;
}

interface Props {
  onSpecialitiesChange(specialitiesState: Specialities): void;
}

const SpeciailtyFilters = ({ onSpecialitiesChange }: Props) => {
  const classes = useStyles();

  const [specialities, setSpecialities] = useState<Specialities>({
    [Speciailty.Architecture]: false,
    [Speciailty.Electrical]: false,
    [Speciailty.Excavation]: false,
    [Speciailty.Plumbing]: false,
  });

  const handleChange = ({
    target: { name, checked },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const newState = {
      ...specialities,
      [name]: checked,
    };
    setSpecialities(newState);
    onSpecialitiesChange(newState);
  };

  return (
    <Card variant="outlined" className={classes.card}>
      <CardContent>
        <Grid container>
          <Grid item xs={12} className={classes.filterHeader}>
            <FilterIcon />
            <Typography variant="body1">
              <strong>Filter</strong>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={specialities[Speciailty.Architecture]}
                      onChange={handleChange}
                      name="Architecture"
                      color="primary"
                    />
                  }
                  label="Architecture"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={specialities[Speciailty.Electrical]}
                      onChange={handleChange}
                      name="Electrical"
                      color="primary"
                    />
                  }
                  label="Electrical"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={specialities[Speciailty.Excavation]}
                      onChange={handleChange}
                      name="Excavation"
                      color="primary"
                    />
                  }
                  label="Excavation"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={specialities[Speciailty.Plumbing]}
                      onChange={handleChange}
                      name="Plumbing"
                      color="primary"
                    />
                  }
                  label="Plumbing"
                />
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SpeciailtyFilters;
