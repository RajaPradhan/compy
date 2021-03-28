import { waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import render from 'shared/testUtils/setup';
import Selectors from 'shared/testUtils/selectors';

describe('Tests for Dashboard page', () => {
  it('should fetch all companies and render the dashboard', async () => {
    const { getByTestId, container } = render();

    await waitForElementToBeRemoved(() => getByTestId(Selectors.LOADER));

    expect(getByTestId(Selectors.TOTAL_RESULT)).toHaveTextContent(
      'Total result: 10',
    );

    expect(
      container.querySelectorAll(Selectors.COMPANY_DISPLAY_CARD),
    ).toHaveLength(10);
  });

  it('should filter companies by speciality', async () => {
    const { getByTestId, container } = render();

    await waitForElementToBeRemoved(() => getByTestId(Selectors.LOADER));

    expect(getByTestId(Selectors.TOTAL_RESULT)).toHaveTextContent(
      'Total result: 10',
    );

    const plumbingCheckbox = container.querySelector(
      Selectors.PLUMBING_CHECKBOX,
    ) as Element;

    userEvent.click(plumbingCheckbox);

    await waitFor(() =>
      expect(getByTestId(Selectors.TOTAL_RESULT)).toHaveTextContent(
        'Total result: 7',
      ),
    );
  });

  it('should filter companies by search term', async () => {
    const { getByTestId, container } = render();

    await waitForElementToBeRemoved(() => getByTestId(Selectors.LOADER));

    expect(getByTestId(Selectors.TOTAL_RESULT)).toHaveTextContent(
      'Total result: 10',
    );

    const searchField = container.querySelector(
      Selectors.SEARCH_FIELD,
    ) as Element;

    userEvent.type(searchField, 'builder');

    await waitFor(() =>
      expect(getByTestId(Selectors.TOTAL_RESULT)).toHaveTextContent(
        'Total result: 3',
      ),
    );
  });

  it('should filter companies by both search term and speciality', async () => {
    const { getByTestId, container } = render();

    await waitForElementToBeRemoved(() => getByTestId(Selectors.LOADER));

    expect(getByTestId(Selectors.TOTAL_RESULT)).toHaveTextContent(
      'Total result: 10',
    );

    const searchField = container.querySelector(
      Selectors.SEARCH_FIELD,
    ) as Element;

    userEvent.type(searchField, 'builder');

    await waitFor(() =>
      expect(getByTestId(Selectors.TOTAL_RESULT)).toHaveTextContent(
        'Total result: 3',
      ),
    );

    const plumbingCheckbox = container.querySelector(
      Selectors.PLUMBING_CHECKBOX,
    ) as Element;

    userEvent.click(plumbingCheckbox);

    await waitFor(() =>
      expect(getByTestId(Selectors.TOTAL_RESULT)).toHaveTextContent(
        'Total result: 2',
      ),
    );
  });

  it('should successfully navigate to company details page on clicking a company card', async () => {
    const { getByTestId, container } = render();

    await waitForElementToBeRemoved(() => getByTestId(Selectors.LOADER));

    expect(getByTestId(Selectors.TOTAL_RESULT)).toHaveTextContent(
      'Total result: 10',
    );

    const firstCompanyCard = container.querySelectorAll(
      Selectors.COMPANY_DISPLAY_CARD,
    )[0] as Element;

    userEvent.click(firstCompanyCard);

    const navigateToDashboardButton = container.querySelector(
      Selectors.NAVIGATE_TO_DASHBOARD_BUTTON,
    );

    await waitFor(() => expect(navigateToDashboardButton).toBeInTheDocument());
  });
});
