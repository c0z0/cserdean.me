import React, { Component } from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import { pink } from "../utils/colors";
import * as breakPoints from "../utils/breakPoints";

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

export default class Menu extends Component {
  constructor(p) {
    super(p);
    this.state = { open: false };
  }

  render() {
    const { active } = this.props;
    const { open } = this.state;

    const leftItems = items.filter(({ right }) => !right);

    const rightItems = items.filter(({ right }) => right);

    return (
      <header>
        <div className="menu__wrapper">
          <div className="menu__logo__wrapper">
            <a
              href="https://github.com/c0z0/cserdean.me"
              rel="noopener noreferrer"
            >
              <img
                src="/static/triangle-gs.svg"
                alt="logo"
                className="menu__logo"
              />
            </a>
            <button
              onClick={() => this.setState({ open: !open })}
              type="button"
              className="menu__arrow"
            >
              <img src="/static/arrow.svg" alt="menu-arrow" />
            </button>
          </div>
          <div className={`menu ${open ? "menu--open" : ""}`}>
            <div className="menu__left">
              {leftItems.map(({ title, target, primary, right }) => (
                <Link href={target} prefetch={!right} key={target}>
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
              {rightItems.map(({ title, target, primary }) => (
                <a
                  key={target}
                  href={target}
                  className={`menu__item ${
                    active === target ? "menu__item--active" : ""
                  } ${primary ? "menu__item--primary" : ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
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
              margin-top: 20px;
            }

            .menu__item {
              color: #888;
              color: #222;
              font-size: 12px;
              text-decoration: none;
              display: block;
              padding: 16px;
              padding-left: 20px;
              border-bottom: 1px solid #eee;
              text-transform: uppercase;
            }

            .menu__item--active {
              background: #eee;
              font-weight: 500;
            }

            .menu__item--primary {
              color: ${pink};
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
              margin: 20px;
            }

            .menu__arrow {
              background: none;
              border: none;
              outline: none;
              box-shadow: none;
              appearance: none;

              transition: all 0.2s;
              transform: rotate(${!open ? "0" : "180deg"});
            }

            .menu {
              margin-top: 20px;
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
                margin: 0;
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
                color: #888;
                text-align: left;
                border-bottom: none;
                text-transform: none;
              }

              .menu__item--active {
                font-weight: normal;
                color: #222;
                background: none;
              }

              .menu__item--primary {
                border-radius: 2rem;
                background-color: ${pink};
                padding: 0.625rem 1.5rem;
                color: white;
                margin: 0 20px;
              }
            }
          `}</style>
        </div>
      </header>
    );
  }
}

Menu.propTypes = {
  active: PropTypes.oneOf(items.map(i => i.target)).isRequired
};
