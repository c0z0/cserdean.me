import React from 'react';
import { render, cleanup } from 'test-utils';
import Router from 'next/router';
import 'jest-styled-components';


import Index from '../../pages/index';

const mockedRouter = {
  push: jest.fn(async () => {}),
  prefetch: () => {},
};
Router.router = mockedRouter;

afterEach(cleanup);

test('Index page matches snapshot', () => {
  const { container } = render(<Index />);

  expect(container.firstChild).toMatchSnapshot();
});
