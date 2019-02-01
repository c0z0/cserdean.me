import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-styled-components";

import ServiceStatus from "../../components/ServiceStatus";

afterEach(cleanup);

test("Matches snapshot", () => {
  global.fetch = jest.fn(() => ({ ok: true }));

  const { container, rerender } = render(<ServiceStatus />);

  expect(container).toMatchSnapshot();

  rerender(<ServiceStatus />);
});
