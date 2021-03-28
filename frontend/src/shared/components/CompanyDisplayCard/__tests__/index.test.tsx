import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Company, Speciailty } from 'pages/Dashboard/types';
import Selectors from 'shared/testUtils/selectors';
import CompanyDisplayCard from '../index';

describe('Tests for CompanyDisplayCard', () => {
  it('should successfully render a CompanyDisplayCard with passed props', async () => {
    const company: Company = {
      id: '01F1CPNKBSZB15BHHB7DN9X601',
      name: 'Construction Delta Inc.',
      logoUrl: 'http://placekitten.com/200/300',
      specialities: [Speciailty.Excavation, Speciailty.Architecture],
      city: 'Berlin',
      description: 'Building a better world!',
    };
    const { container } = render(
      <Router>
        <CompanyDisplayCard company={company} />
      </Router>,
    );

    expect(
      container.querySelector(Selectors.COMPANY_DISPLAY_CARD),
    ).toBeInTheDocument();

    expect(
      container.querySelector(Selectors.COMPANY_NAME_IN_DISPLAY_CARD),
    ).toHaveTextContent('Construction Delta Inc.');
  });
});
