import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Menu from './Menu'
import * as breakPoints from '../utils/breakPoints'

const Container = styled.div`
  font-size: 12px;
  color: ${({ textColor }) => textColor};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  max-width: 900px;
  margin: 0 auto;
`

const Content = styled.div`
  margin: 80px 0;

  @media (${breakPoints.phoneOnly}) {
    margin: 40px 20px;
  }
`

export default function Page({ children, active, dark, whiteMenu }) {
  const textColor = !dark ? '#484848' : 'white'

  return (
    <Container textColor={textColor}>
      <Menu active={active} dark={dark} whiteMenu={whiteMenu} />
      <Content>{children}</Content>
      <style>{`
        body {
          background: ${dark ? 'black' : 'none'};
        }
      `}</style>
    </Container>
  )
}

Page.defaultProps = {
  dark: false,
  whiteMenu: false
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.string.isRequired,
  dark: PropTypes.bool,
  whiteMenu: PropTypes.bool
}
