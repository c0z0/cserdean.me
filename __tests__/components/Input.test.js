import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import Input from "../../components/Input";
import "jest-styled-components";

afterEach(cleanup);

test("Matches snapshot", () => {
  const { container, rerender } = render(
    <Input text="" loading onChange={() => {}} onClear={() => {}} />
  );

  expect(container.firstChild).toMatchSnapshot();

  rerender(
    <Input text="a" loading={false} onChange={() => {}} onClear={() => {}} />
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("Clear button triggers", () => {
  const clear = jest.fn();

  const { getByTestId } = render(
    <Input text="a" loading onChange={() => {}} onClear={clear} />
  );

  fireEvent.click(getByTestId("input-clear-button"));

  expect(clear).toBeCalled();
});

test("On change event triggers", () => {
  const change = jest.fn();

  const { getByTestId } = render(
    <Input text="a" loading onChange={change} onClear={() => {}} />
  );

  fireEvent.change(getByTestId("input-element"), { target: { value: "b" } });

  expect(change).toBeCalled();
});
