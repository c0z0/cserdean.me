import React from "react";
import { render, cleanup } from "react-testing-library";
import Router from "next/router";

import Page from "../../components/Page";

const mockedRouter = {
  push: jest.fn(async () => {}),
  prefetch: () => {}
};
Router.router = mockedRouter;

afterEach(cleanup);

test("Matches snapshot", () => {
  const { container, rerender } = render(<Page active="/">test content</Page>);

  expect(container.firstChild).toMatchSnapshot();

  rerender(
    <Page active="/" dark>
      test content
    </Page>
  );

  expect(container.firstChild).toMatchSnapshot();
});
