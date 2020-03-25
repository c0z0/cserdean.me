import React from 'react';
import { render, cleanup } from 'test-utils';
import Router from 'next/router';
import 'jest-styled-components';

import Ai from '../../../pages/ai';

const mockedRouter = {
  push: jest.fn(async () => {}),
  prefetch: () => {},
};
Router.router = mockedRouter;

afterEach(cleanup);

test('Ai page matches snapshot', () => {
  const { container } = render(<Ai />);

  expect(container.firstChild).toMatchSnapshot();
});
