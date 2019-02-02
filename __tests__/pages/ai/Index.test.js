import React from "react";
import { render, cleanup } from "react-testing-library";
import Router from "next/router";

import Ai from "../../../pages/ai";

const mockedRouter = {
  push: jest.fn(async () => {}),
  prefetch: () => {}
};
Router.router = mockedRouter;

afterEach(cleanup);

test("Ai page matches snapshot", () => {
  const { container } = render(<Ai />);

  expect(container.firstChild).toMatchSnapshot();
});
