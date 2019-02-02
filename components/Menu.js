import React, { useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import styled from "styled-components";

import { pink } from "../utils/colors";
import * as breakPoints from "../utils/breakPoints";
import triangle from "../static/svg/triangle-gs.json";

export const items = [
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

const Wrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans";
  background: ${({ open }) => (open ? "white" : "none")};
  padding-top: 20px;
  position: ${({ open }) => (open ? "fixed" : "static")};
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  @media (${breakPoints.tabletUp}) {
    width: 100%;
    display: flex;
    background: none;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  margin-top: 0;

  @media (${breakPoints.tabletUp}) {
    margin: 0;
  }
`;

const Logo = styled.img.attrs({
  alt: "menu-logo",
  title: "Source code",
  src: triangle
})`
  height: 40px;
  transform-origin: center;
  margin-right: 20px;
  transition: all 0.5s ease-in-out;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  transform: rotate(90deg);
`;

const MenuButton = styled.button.attrs({
  type: "button",
  "data-testid": "menu-button"
})`
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 40px;
  height: 40px;
  padding: 0;

  @media (${breakPoints.tabletUp}) {
    display: none;
  }
`;

const MenuIcon = styled.div`
  & * {
    transition: all 0.2s;
    width: 22px;
    height: 1px;
    background-color: ${({ background }) => background};
  }
`;

const MenuIconTop = styled.div`
  transform: ${({ open }) => `rotate(${open ? "45deg" : 0})
              translateY(${open ? "1px" : "-4px"})`};
`;

const MenuIconBottom = styled.div`
  transform: ${({ open }) => `rotate(${open ? "-45deg" : 0})
              translateY(${open ? "-1px" : "4px"})`};
`;

const MenuItemsWrapper = styled.div.attrs({
  "data-testid": "menu-wrapper"
})`
  padding-top: 20px;
  display: none;
  @media (${breakPoints.tabletUp}) {
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    flex: 1;
  }

  ${({ open }) => open && `background: white; display: block;`}
`;

const MenuItem = styled.a.attrs(({ href }) => ({
  "data-testid": `menu-item-target-${href}`
}))`
  color: ${({ textColorMobile }) => textColorMobile};
  font-size: 12px;
  text-decoration: none;
  display: block;
  padding: 16px;
  padding-left: 20px;
  border-bottom: 1px solid ${({ activeColorMobile }) => activeColorMobile};
  text-transform: uppercase;

  ${({ active, activeColorMobile }) =>
    active &&
    `background: ${activeColorMobile}; border-color: rgba(0, 0, 0, 0);`}

  ${({ primary }) => primary && `color: ${pink};`}

  @media (${breakPoints.tabletUp}) {
    margin: 0 10px;
    display: inline-block;
    padding: 0;
    color: ${({ textColorDesktop }) => textColorDesktop};
    text-align: left;
    border-bottom: none;
    text-transform: none;
    transition: all 0.2s linear;

    ${({ active, activeTextColor }) =>
      active && `color: ${activeTextColor}; background: none;`}

    ${({ primary }) =>
      primary &&
      `  border-radius: 2rem;
          background-color: ${pink};
          padding: 0.625rem 1.5rem;
          color: white;
          margin: 0;
          margin-left: 20px;`}

    &:hover {
      color: ${({ hoverTextColor }) => hoverTextColor};
    }
  }
`;

export default function Menu({ active, dark }) {
  const [open, setMenu] = useState(false);

  const textColorDesktop =
    !dark || open ? "#999999" : "rgba(255, 255, 255, 0.66)";
  const textColorMobile = !dark || open ? "#484848" : "white";

  const hoverTextColor = !dark || open ? "black" : "white";

  const activeTextColor = !dark || open ? "black" : "white";

  const activeColorMobile = !dark || open ? "#eee" : "rgba(255, 255, 255, .2)";

  const leftItems = items.filter(({ right }) => !right);

  const rightItems = items.filter(({ right }) => right);
  return (
    <header>
      <Wrapper open={open}>
        <LogoWrapper>
          <Link href="/" prefetch>
            <a
              data-testid="menu-logo"
              href="/"
              onContextMenu={e => {
                e.preventDefault();
                window.location.assign("http://github.com/c0z0/cserdean.me");
              }}
            >
              <Logo src={triangle} alt="logo" title="source" />
            </a>
          </Link>
          <MenuButton onClick={() => setMenu(!open)}>
            <MenuIcon background={textColorMobile}>
              <MenuIconTop open={open} />
              <MenuIconBottom open={open} />
            </MenuIcon>
          </MenuButton>
        </LogoWrapper>
        <MenuItemsWrapper open={open}>
          <div>
            {leftItems.map(({ title, target }) => (
              <Link href={target} prefetch key={target}>
                <MenuItem
                  textColorDesktop={textColorDesktop}
                  textColorMobile={textColorMobile}
                  activeColorMobile={activeColorMobile}
                  activeTextColor={activeTextColor}
                  hoverTextColor={hoverTextColor}
                  href={target}
                  key={target}
                  active={active === target}
                >
                  {title}
                </MenuItem>
              </Link>
            ))}
          </div>
          <div>
            {rightItems.map(({ title, target, primary }) => (
              <MenuItem
                textColorDesktop={textColorDesktop}
                textColorMobile={textColorMobile}
                activeColorMobile={activeColorMobile}
                avtiveTextColor={activeTextColor}
                hoverTextColor={hoverTextColor}
                href={target}
                key={target}
                active={active === target}
                primary={primary}
                target="_blank"
                rel="noopener noreferrer"
              >
                {title}
              </MenuItem>
            ))}
          </div>
        </MenuItemsWrapper>
      </Wrapper>
    </header>
  );
}

Menu.propTypes = {
  active: PropTypes.oneOf(items.map(i => i.target)).isRequired,
  dark: PropTypes.bool
};

Menu.defaultProps = {
  dark: false
};
