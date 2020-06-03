import React, { useState, useContext } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ThemeContext from '../utils/ThemeContext';
import { pink } from '../utils/colors';
import * as breakPoints from '../utils/breakPoints';
import { Triangle } from './Svg';
import ThemeSwitch, { Dropdown } from './ThemeSwitch';

export const items = [
  {
    title: 'Home',
    target: '/',
  },
  {
    title: 'Projects',
    target: '/projects',
  },
  {
    title: 'AI Experiments',
    target: '/ai',
  },
  {
    title: 'CV',
    target: '/static/cv_cosmin_serdean.pdf',
    right: true,
  },
  {
    title: 'GitHub',
    target: 'https://github.com/c0z0',
    right: true,
  },
  {
    title: 'Email',
    target: 'mailto:cosmin@cserdean.com',
    right: true,
    primary: true,
  },
];

const Wrapper = styled.div`
  background: ${({
    open,
    theme: {
      colors: { background },
    },
  }) => (open ? background : 'none')};
  padding-top: 30px;
  position: ${({ open }) => (open ? 'fixed' : 'static')};
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

const Logo = styled(Triangle)`
  height: 40px;
  width: 47px;
  transform-origin: center;
  margin-right: 20px;
  transition: all 0.5s ease-in-out;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  transform: rotate(calc(90deg + ${(p) => p.theme.logoRotate}deg));
`;

const MenuButton = styled.button.attrs({
  type: 'button',
  'data-testid': 'menu-button',
  'aria-label': 'open menu',
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
    background-color: ${(p) => p.theme.colors.foreground};
  }
`;

const MenuIconTop = styled.div`
  transform: ${({ open }) => `rotate(${open ? '45deg' : 0})
              translateY(${open ? '1px' : '-4px'})`};
`;

const MenuIconBottom = styled.div`
  transform: ${({ open }) => `rotate(${open ? '-45deg' : 0})
              translateY(${open ? '-1px' : '4px'})`};
`;

const MenuItemsWrapper = styled.div.attrs({
  'data-testid': 'menu-wrapper',
})`
  padding-top: 20px;
  display: none;
  z-index: 3;

  @media (${breakPoints.tabletUp}) {
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    flex: 1;

    & div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  ${({ open, theme }) =>
    open && `background: ${theme.colors.background}; display: block;`}
`;

const MenuItem = styled.a.attrs(({ href }) => ({
  'data-testid': `menu-item-target-${href}`,
}))`
  color: ${(p) => p.theme.colors.foreground};
  font-size: 12px;
  text-decoration: none;
  display: block;
  padding: 16px;
  padding-left: 20px;
  border-bottom: 1px solid ${(p) => p.theme.colors.highlight};
  text-transform: uppercase;

  ${({ active, theme }) =>
    active &&
    `background: ${theme.colors.highlight}; border-color: rgba(0, 0, 0, 0);`}

  ${({ primary }) => primary && `color: ${pink};`}

  @media (${breakPoints.tabletUp}) {
    margin: 0 10px;
    display: inline-block;
    padding: 0;
    color: ${(p) => p.theme.colors.foreground};
    opacity: .66;
    text-align: left;
    border-bottom: none;
    text-transform: none;
    transition: all 0.2s linear;

    ${({ active }) => active && `opacity: 1; background: none;`}

    ${({ inverted }) => inverted && 'color: white;'}

    ${({ primary, theme, inverted }) =>
      primary &&
      `  border-radius: 2rem;
          background-color: ${inverted ? 'white' : theme.colors.foreground};
          padding: 0.625rem 1.5rem;
          color: ${inverted ? 'black' : theme.colors.background};
          margin: 0;
          opacity: 1;
          `}

    &:hover {
      opacity: 1;
    }
  }
`;

export default function Menu({ active }) {
  const [open, setMenu] = useState(false);

  const leftItems = items.filter(({ right }) => !right);

  const rightItems = items.filter(({ right }) => right);

  const { toggleTheme } = useContext(ThemeContext);
  return (
    <header>
      <Wrapper open={open}>
        <LogoWrapper>
          <Link href="/">
            <a
              data-testid="menu-logo"
              href="/"
              onContextMenu={(e) => {
                e.preventDefault();
                toggleTheme();
                // window.location.assign('http://github.com/c0z0/cserdean.me');
              }}
            >
              <Logo title="source" />
            </a>
          </Link>
          <MenuButton onClick={() => setMenu(!open)}>
            <MenuIcon>
              <MenuIconTop open={open} />
              <MenuIconBottom open={open} />
            </MenuIcon>
          </MenuButton>
        </LogoWrapper>
        <MenuItemsWrapper open={open}>
          <div>
            {leftItems.map(({ title, target }) => (
              <Link href={target} key={target}>
                <MenuItem
                  onClick={() => {
                    if (active === target) setMenu(false);
                  }}
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
            <Dropdown inverted={active === '/'} />
            {rightItems.map(({ title, target, primary }) => (
              <MenuItem
                inverted={active === '/'}
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
            <ThemeSwitch hideDesktop />
          </div>
        </MenuItemsWrapper>
      </Wrapper>
    </header>
  );
}

Menu.propTypes = {
  active: PropTypes.oneOf(items.map((i) => i.target)).isRequired,
};
