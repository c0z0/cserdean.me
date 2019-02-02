import React from "react";
import {
  render,
  cleanup,
  waitForDomChange,
  fireEvent
} from "react-testing-library";
import Router from "next/router";
import "jest-styled-components";

import Sentiment from "../../../pages/ai/sentiment";

const mockedRouter = {
  push: jest.fn(async () => {}),
  prefetch: () => {}
};
Router.router = mockedRouter;

afterEach(cleanup);

test("Sentiment page matches snapshot", async () => {
  global.fetch = jest.fn(async () => ({ ok: true }));

  const { container } = render(<Sentiment />);

  expect(container.firstChild).toMatchSnapshot();

  await waitForDomChange({ container });

  expect(container.firstChild).toMatchSnapshot();
});

test("Sentiment page shows loading message and then input", async () => {
  global.fetch = jest.fn(async () => ({ ok: true }));

  const { container, queryByTestId, queryByText } = render(<Sentiment />);

  expect(queryByText("Loading...")).toBeTruthy();

  await waitForDomChange({ container });

  expect(queryByTestId("input-element")).toBeTruthy();
});

test("Sentiment page shows loading message and then error", async () => {
  global.fetch = jest.fn(async () => ({ ok: false }));

  const { container, queryByText } = render(<Sentiment />);

  expect(queryByText("Loading...")).toBeTruthy();

  await waitForDomChange({ container });

  expect(queryByText("Something went wrong")).toBeTruthy();
});

test("Sentiment page shows loading message and then catches error", async () => {
  global.fetch = jest.fn(async () => {
    throw new Error("test-error");
  });

  const { container, queryByText } = render(<Sentiment />);

  expect(queryByText("Loading...")).toBeTruthy();

  await waitForDomChange({ container });

  expect(queryByText("Something went wrong")).toBeTruthy();
});

test("Predict not ok", async () => {
  global.fetch = jest.fn(async () => ({ ok: true }));

  const { container, queryByTestId, queryByText } = render(<Sentiment />);

  await waitForDomChange({ container });

  const input = queryByTestId("input-element");

  global.fetch = jest.fn(async () => ({
    ok: false
  }));

  fireEvent.change(input, {
    target: { value: "test-value" }
  });

  await waitForDomChange({ container });

  expect(queryByText("Something went wrong")).toBeTruthy();
});

test("Predict not ok", async () => {
  global.fetch = jest.fn(async () => ({ ok: true }));

  const { container, queryByTestId, queryByText } = render(<Sentiment />);

  await waitForDomChange({ container });

  const input = queryByTestId("input-element");

  global.fetch = jest.fn(async () => {
    throw new Error("test-error");
  });

  fireEvent.change(input, {
    target: { value: "test-value" }
  });

  await waitForDomChange({ container });

  expect(queryByText("Something went wrong")).toBeTruthy();
});

test("Sentiment page predicts and displays and clears input", async () => {
  global.fetch = jest.fn(async () => ({ ok: true }));

  const { container, queryByText, queryByTestId, getByTestId } = render(
    <Sentiment />
  );

  expect(queryByText("Loading...")).toBeTruthy();

  await waitForDomChange({ container });

  const input = queryByTestId("input-element");

  global.fetch = jest.fn(async () => ({
    ok: true,
    json: async () => ({
      prediction: 4
    })
  }));

  fireEvent.change(input, {
    target: { value: "test-value" }
  });

  expect(input.value).toBe("test-value");
  expect(queryByTestId("input-loading")).toBeTruthy();

  await waitForDomChange({ container });

  expect(queryByTestId("input-loading")).toBeNull();

  expect(container.querySelector("span")).toHaveStyleRule("left", "300px");

  fireEvent.click(getByTestId("input-clear-button"));

  expect(input.value).toBe("");
  expect(container.querySelector("span")).toHaveStyleRule("left", "150px");

  fireEvent.change(input, {
    target: { value: "test-value" }
  });

  await waitForDomChange({ container });

  fireEvent.change(input, {
    target: { value: "" }
  });

  expect(container.querySelector("span")).toHaveStyleRule("left", "150px");
});
