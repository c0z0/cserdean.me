import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Menu from "./Menu";
import * as breakPoints from "../utils/breakPoints";

const Container = styled.div`
  font-size: 12px;
  color: ${({ textColor }) => textColor};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans";
  max-width: 900px;
  margin: 0 auto;

  ${({ fullHeight }) =>
    fullHeight && "height: 100vh; display: flex; flex-direction: column;"};
`;

const Content = styled.div`
  margin: 80px 0;

  @media (${breakPoints.phoneOnly}) {
    margin: 0 20px;
  }
`;

export default function Page({
  children,
  active,
  fullHeight,
  dark,
  whiteMenu
}) {
  const textColor = !dark ? "#484848" : "white";

  return (
    <Container fullHeight={fullHeight} textColor={textColor}>
      <Menu active={active} dark={dark || whiteMenu} />
      {fullHeight ? children : <Content>{children}</Content>}
      <style>{`
        body {
          background: ${dark ? "black" : "none"};
        }
      `}</style>
    </Container>
  );
}

Page.defaultProps = {
  fullHeight: false,
  dark: false,
  whiteMenu: false
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.string.isRequired,
  fullHeight: PropTypes.bool,
  dark: PropTypes.bool,
  whiteMenu: PropTypes.bool
};
