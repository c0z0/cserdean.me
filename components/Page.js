import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Head from 'next/head';

import Menu from './Menu';
import * as breakPoints from '../utils/breakPoints';

const Container = styled.div`
  font-size: 12px;
  color: ${({ textColor }) => textColor};
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  max-width: 900px;
  margin: 0 auto;
`;

const Content = styled.div`
  margin: 80px 0;

  @media (${breakPoints.phoneOnly}) {
    margin: 40px 20px;
  }
`;

export default function Page({ children, active }) {
  return (
    <Container>
      <Head>
        <title>Cosmin Serdean</title>
      </Head>
      <Menu active={active} />
      <Content>{children}</Content>
    </Container>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.string.isRequired,
};
