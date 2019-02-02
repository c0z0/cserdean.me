import React from "react";
import { render, cleanup } from "react-testing-library";
import Router from "next/router";

import Projects from "../../pages/projects";

const mockedRouter = {
  push: jest.fn(async () => {}),
  prefetch: () => {}
};
Router.router = mockedRouter;

afterEach(cleanup);

test("Projects page matches snapshot", () => {
  const { container } = render(<Projects />);

  expect(container.firstChild).toMatchSnapshot();
});
