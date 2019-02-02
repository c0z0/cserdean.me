import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import Router from "next/router";
import Menu, { items } from "../../components/Menu";
import "jest-styled-components";
import * as breakPoints from "../../utils/breakPoints";

const mockedRouter = {
  push: jest.fn(async () => {}),
  prefetch: () => {}
};
Router.router = mockedRouter;

afterEach(cleanup);

test("Menu matches snapshot", () => {
  const { container } = render(<Menu active="/" />);

  expect(container.firstChild).toMatchSnapshot();
});

test("Dark and light menu render", () => {
  const { getByTestId, rerender } = render(<Menu dark active="/" />);

  const item = getByTestId("menu-item-target-/");

  expect(item).toHaveStyleRule("color", "white");

  rerender(<Menu active="/" />);

  expect(item).toHaveStyleRule("color", "#484848");
});

test("Menu sets active page correctly", () => {
  const { container, rerender } = render(<Menu active="/" />);

  items
    .filter(item => !item.right && item.target !== "/")
    .forEach(item => {
      rerender(<Menu active={item.target} />);

      const activeItem = container.querySelector(`a[href="${item.target}"]`);

      expect(activeItem).toHaveStyleRule("color", "#484848");
      expect(activeItem.textContent).toBe(item.title);
    });

  items
    .filter(item => !item.right && item.target !== "/")
    .forEach(item => {
      rerender(<Menu active={item.target} dark />);

      const activeItem = container.querySelector(`a[href="${item.target}"]`);

      expect(activeItem).toHaveStyleRule("color", "white");
      expect(activeItem.textContent).toBe(item.title);
    });
});

test("Menu opens and closes", () => {
  const { getByTestId } = render(<Menu active="/" />);

  const menuButton = getByTestId("menu-button");
  const menuItem = getByTestId("menu-item-target-/");
  const menuWrapper = getByTestId("menu-wrapper");

  expect(menuWrapper).toHaveStyleRule("display", "none");

  fireEvent.click(menuButton);

  expect(menuWrapper).toHaveStyleRule("display", "block");

  fireEvent.click(menuItem);

  expect(menuWrapper).toHaveStyleRule("display", "none");
});

test("Menu visible on desktop", () => {
  const { getByTestId } = render(<Menu active="/" />);

  const menuWrapper = getByTestId("menu-wrapper");
  expect(menuWrapper).toHaveStyleRule("display", "flex", {
    media: `(${breakPoints.tabletUp})`
  });
});

test("Menu navigates", () => {
  const { getByTestId } = render(<Menu active="/" />);

  items
    .filter(item => !item.right)
    .forEach(item => {
      fireEvent.click(getByTestId(`menu-item-target-${item.target}`));

      expect(mockedRouter.push).toBeCalledWith(item.target, item.target, {
        shallow: undefined
      });

      expect(1).toBeGreaterThan(0);

      mockedRouter.push.mockClear();
    });
});

test("Logo right-click navigates to GithubRepo", () => {
  const { getByTestId } = render(<Menu active="/" />);

  const logo = getByTestId("menu-logo");

  window.location.assign = jest.fn();

  fireEvent.contextMenu(logo);

  expect(window.location.assign).toBeCalledWith(
    "http://github.com/c0z0/cserdean.me"
  );
});
