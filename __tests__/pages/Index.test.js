import React from "react";
import { render, cleanup } from "react-testing-library";
import Router from "next/router";

import Index from "../../pages/index";

const mockedRouter = {
  push: jest.fn(async () => {}),
  prefetch: () => {}
};
Router.router = mockedRouter;

afterEach(cleanup);

test("Index page matches snapshot", () => {
  const { container } = render(<Index />);

  expect(container.firstChild).toMatchSnapshot();
});
