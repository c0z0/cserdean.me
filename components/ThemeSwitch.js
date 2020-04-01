import React, { useContext, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext as StyledThemeContext } from 'styled-components';

import ThemeContext from '../utils/ThemeContext';
import onClickOutSide from '../utils/onClickOutside';

const Wrapper = styled.div`
  padding: 16px 20px;
  color: ${p => p.theme.colors.foreground};
  cursor: pointer;
  user-select: none;

  display: flex;
  align-items: center;
  text-transform: uppercase;

  @media screen and (${p => p.theme.breakPoints.tabletUp}) {
    display: ${p => p.hideDesktop && 'none !important'};
    text-transform: none;
  }
`;

const Rail = styled.div`
  display: inline-block;
  height: 1rem;
  width: 2rem;
  background: ${({ value, theme }) =>
    value ? theme.colors.primary : theme.colors.highlight};
  border-radius: 1rem;
  position: relative;
  margin-right: 1rem;
  transition: background 0.2s linear;
`;

const Knob = styled.div`
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 100%;
  background: ${p => p.theme.colors.background};
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
  transition: left 0.2s linear;

  ${p => p.value && 'left: 1.1rem;'}
`;
const ThemeSwitch = ({ hideDesktop }) => {
  const { light, toggleTheme } = useContext(ThemeContext);
  return (
    <Wrapper onClick={toggleTheme} hideDesktop={hideDesktop}>
      <Rail value={!light}>
        <Knob value={!light} />
      </Rail>
      Dark Mode
    </Wrapper>
  );
};

ThemeSwitch.propTypes = {
  hideDesktop: PropTypes.bool,
};

ThemeSwitch.defaultProps = {
  hideDesktop: false,
};

const DropdownWrapper = styled.div`
  display: inline-block;
  margin: 0 10px;
  position: relative;
  width: 13px;

  @media screen and (${p => p.theme.breakPoints.phoneOnly}) {
    display: none !important;
  }
`;

const EllipsisButton = styled.button.attrs({
  'aria-label': 'more pages',
})`
  margin: 0;
  padding: 0;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 15px;
`;

const Ellipsis = ({ onClick, inverted, active }) => {
  const theme = useContext(StyledThemeContext);
  const fill = inverted ? '#fff' : theme.colors.foreground;
  const opacity = active ? '1' : '.66';
  return (
    <EllipsisButton onClick={onClick} type="button">
      <svg width="13" height="3" viewBox="0 0 13 3" fill="none">
        <rect width="3" height="3" rx="1.5" opacity={opacity} fill={fill} />
        <rect
          x="5"
          width="3"
          height="3"
          rx="1.5"
          fill={fill}
          opacity={opacity}
        />
        <rect
          x="10"
          width="3"
          height="3"
          rx="1.5"
          fill={fill}
          opacity={opacity}
        />
      </svg>
    </EllipsisButton>
  );
};

Ellipsis.propTypes = {
  onClick: PropTypes.func.isRequired,
  inverted: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
};

const DropdownBody = styled.div`
  position: absolute;
  left: 50%;
  top: calc(100% - 0.25rem);
  transform: translateX(-50%);
  border: 1px solid
    ${p => (p.theme.isLight ? 'transparent' : p.theme.colors.highlight)};
  border-radius: 0.25rem;
  width: 150px;
  box-shadow: ${p => p.theme.shadow};
  z-index: 10;

  background: ${p => p.theme.colors.background};
  ${p => !p.open && `display: none !important;`}

  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    height: 0.5rem;
    width: 0.5rem;
    background: ${p => p.theme.colors.background};
    left: 50%;
    top: -5px;
    transform: translateX(-50%) rotate(45deg);
    border: 1px solid
      ${p => (p.theme.isLight ? 'transparent' : p.theme.colors.highlight)};
    border-bottom: none;
    border-right: none;
  }
`;

export const Dropdown = ({ inverted }) => {
  const [dropdownState, setDropdownState] = useState(false);
  const dropdownRef = useRef(null);

  onClickOutSide(() => setDropdownState(false), dropdownRef);

  return (
    <DropdownWrapper ref={dropdownRef}>
      <Ellipsis
        onClick={() => setDropdownState(!dropdownState)}
        inverted={inverted}
        active={dropdownState}
      >
        ⋅⋅⋅
      </Ellipsis>
      <DropdownBody open={dropdownState}>
        <ThemeSwitch />
      </DropdownBody>
    </DropdownWrapper>
  );
};

Dropdown.propTypes = {
  inverted: PropTypes.bool.isRequired,
};

export default ThemeSwitch;
