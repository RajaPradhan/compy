import { waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import render from 'shared/testUtils/setup';
import Selectors from 'shared/testUtils/selectors';

describe('Tests for Dashboard page', () => {
  it('should successfully render the company details card', async () => {
    const { getByTestId, container } = render();

    await waitForElementToBeRemoved(() => getByTestId(Selectors.LOADER));

    expect(getByTestId(Selectors.TOTAL_RESULT)).toHaveTextContent(
      'Total result: 10',
    );

    const firstCompanyCard = container.querySelectorAll(
      Selectors.COMPANY_DISPLAY_CARD,
    )[0] as Element;

    userEvent.click(firstCompanyCard);

    await waitFor(() =>
      expect(
        container.querySelector(Selectors.NAVIGATE_TO_DASHBOARD_BUTTON),
      ).toBeInTheDocument(),
    );

    await waitForElementToBeRemoved(() => getByTestId(Selectors.LOADER));

    await waitFor(() =>
      expect(
        container.querySelector(Selectors.COMPANY_NAME_IN_DISPLAY_CARD),
      ).toBeInTheDocument(),
    );
  });
});
