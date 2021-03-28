import { render } from '@testing-library/react';

import Selectors from 'shared/testUtils/selectors';
import Error from '../index';

describe('Tests for Error component', () => {
  it('should successfully render the Error component with the passed message', async () => {
    const message = 'Something went wrong!';

    const { getByTestId } = render(<Error message={message} />);

    expect(getByTestId(Selectors.ERROR_MESSAGE)).toHaveTextContent(
      'Something went wrong!',
    );
  });
});
