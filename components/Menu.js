import React, { Component } from "react";
import Link from "next/link";

import { blue, pink } from "../utils/colors";
import * as breakPoints from "../utils/breakPoints.js";

const items = [
  {
    title: "Home",
    target: "/"
  },
  {
    title: "Projects",
    target: "/projects"
  },
  {
    title: "AI Experiments",
    target: "/ai"
  },
  {
    title: "CV",
    target: "/static/cv_cosmin_serdean.pdf",
    right: true
  },
  {
    title: "GitHub",
    target: "https://github.com/c0z0",
    right: true
  },
  {
    title: "Email",
    target: "mailto:cosmoserdean@gmail.com",
    right: true,
    primary: true
  }
];

export default class Navbar extends Component {
  state = { open: false };

  render() {
    const { active } = this.props;
    const { open } = this.state;

    const leftItems = items.filter(({ right }) => !right);

    const rightItems = items.filter(({ right }) => right);

    return (
      <header>
        <div className="menu__wrapper">
          <div className="menu__logo__wrapper">
            <a href="https://github.com/c0z0/cserdean.me" target="_blank">
              <img
                src="/static/triangle-gs.svg"
                alt="logo"
                className="menu__logo"
              />
            </a>
            <img
              src="/static/arrow.svg"
              alt="logo"
              className="menu__arrow"
              onClick={() => this.setState({ open: !open })}
            />
          </div>
          <div className={`menu ${open ? "menu--open" : ""}`}>
            <div className="menu__left">
              {leftItems.map(({ title, target, primary, right }, k) => (
                <Link href={target} prefetch={!right} key={k}>
                  <a
                    href={target}
                    className={`menu__item ${
                      active === target ? "menu__item--active" : ""
                    } ${primary ? "menu__item--primary" : ""}`}
                  >
                    {title}
                  </a>
                </Link>
              ))}
            </div>
            <div className="menu__right">
              {rightItems.map(({ title, target, primary, right }, k) => (
                <a
                  key={k}
                  href={target}
                  className={`menu__item ${
                    active === target ? "menu__item--active" : ""
                  } ${primary ? "menu__item--primary" : ""}`}
                  target="_blank"
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
          <style jsx>{`
            .menu__wrapper {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans";
            }

            .menu__item {
              color: #888;
              font-size: 12px;
              text-decoration: none;
              display: block;
              padding: 0.625rem 1.5rem;
              text-align: center;
              border-bottom: 1px solid #eee;
            }

            .menu__item:nth-last-child(2) {
              border: none;
            }

            .menu__item--active {
              color: #484848 !important;
            }

            .menu__item--primary {
              color: #484848;
              border-radius: 2rem;
              background-color: ${pink};
              padding: 0.625rem 1.5rem;
              color: white;
              margin: 0 20px;
            }

            .menu__logo {
              height: 40px;
              margin-right: 20px;
              transition: all 0.2s;
              transform: rotate(90deg);
            }

            .menu__logo__wrapper {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }

            .menu__arrow {
              cursor: pointer;
              transition: all 0.2s;
              transform: rotate(${open ? "0" : "180deg"});
            }

            .menu {
              display: none;
            }

            .menu--open {
              display: block;
            }

            @media (${breakPoints.tabletUp}) {
              .menu__arrow {
                display: none;
              }

              .menu__logo__wrapper {
                margin: 0;
              }

              .menu__wrapper {
                width: 100%;
                display: flex;
              }

              .menu {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                font-size: 12px;
                flex: 1;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                  "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans";
              }

              .menu__item {
                margin: 0 10px;
                display: inline-block;
                padding: 0;
                text-align: left;
                border-bottom: none;
              }

              .menu__item--primary {
                padding: 0.625rem 1.5rem;
              }
            }
          `}</style>
        </div>
      </header>
    );
  }
}
