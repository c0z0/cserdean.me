import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import Router from "next/router";
import Menu, { items } from "../../components/Menu";

const mockedRouter = {
  push: jest.fn(async () => {}),
  prefetch: () => {}
};
Router.router = mockedRouter;

afterEach(cleanup);

// test("Menu matches snapshot", () => {
//   const { container } = render(<Menu active="/" />);

//   expect(container).toMatchSnapshot();
// });

test("Dark menu render", () => {
  expect(() => {
    render(<Menu dark active="/" />);
  }).not.toThrow();
});

test("Menu sets active page correctly", () => {
  const { container, rerender } = render(<Menu active="/" />);

  items
    .filter(item => !item.right)
    .forEach(item => {
      rerender(<Menu active={item.target} />);

      const activeItem = container.querySelector(".menu__item--active");

      expect(activeItem.getAttribute("href")).toBe(item.target);
      expect(activeItem.textContent).toBe(item.title);
    });
});

test("Menu opens and closes", () => {
  const { container } = render(<Menu active="/" />);

  const menuButton = container.querySelector("button");

  expect(
    container.querySelector(".menu").classList.contains("menu--open")
  ).toBeFalsy();

  fireEvent.click(menuButton);

  expect(
    container.querySelector(".menu").classList.contains("menu--open")
  ).toBeTruthy();

  fireEvent.click(menuButton);

  expect(
    container.querySelector(".menu").classList.contains("menu--open")
  ).toBeFalsy();
});

test("Menu navigates", () => {
  const { container } = render(<Menu active="/" />);

  items
    .filter(item => !item.right)
    .forEach(item => {
      fireEvent.click(
        container.querySelector(`.menu__item[href="${item.target}"]`)
      );

      expect(mockedRouter.push).toBeCalledWith(item.target, item.target, {
        shallow: undefined
      });

      expect(1).toBeGreaterThan(0);

      mockedRouter.push.mockClear();
    });
});

test("Logo right-click navigates to GithubRepo", () => {
  const { container } = render(<Menu active="/" />);

  const logo = container.querySelector(".menu__logo__wrapper *");

  window.location.assign = jest.fn();

  fireEvent.contextMenu(logo);

  expect(window.location.assign).toBeCalledWith(
    "http://github.com/c0z0/cserdean.me"
  );
});
