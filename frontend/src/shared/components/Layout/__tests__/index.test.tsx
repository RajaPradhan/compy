import { render } from '@testing-library/react';

import Selectors from 'shared/testUtils/selectors';
import Layout from '../index';

describe('Tests for Header component', () => {
  it('should successfully render the Layout component', async () => {
    const { getByTestId } = render(
      <Layout>
        <div data-testid="layout-child">list of companies</div>
      </Layout>,
    );

    expect(getByTestId(Selectors.COMPANY_LOGO)).toHaveTextContent('Compy');
    expect(getByTestId(Selectors.LAYOUT_CHILD)).toHaveTextContent(
      'list of companies',
    );
  });
});
