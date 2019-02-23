import React from 'react'
import styled from 'styled-components'

import * as breakPoints from '../utils/breakPoints'
import Page from '../components/Page'
import { Triangle, Wave, Bg } from '../components/Svg'

const StyledTriangle = styled(Triangle).attrs({
  draggable: false
})`
  height: 450px;
  width: 523px;
  position: absolute;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.1));
  top: 50%;
  left: 50%;
  display: none;
  transform: rotate(10deg) translate(0, -50%);

  @media (${breakPoints.tabletUp}) {
    display: block;
  }
`

const Content = styled.div`
  margin-top: 64px;
  text-align: center;
  @media (${breakPoints.tabletUp}) {
    text-align: left;
    margin-top: 232px;
  }
`

const StyledBg = styled(Bg)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;

  @media (${breakPoints.phoneOnly}) {
    display: none;
  }
`

const Greeting = styled.p`
  font-weight: 400;
  color: #98a4a8;
  margin: 0;
  font-size: 24px;
`

const StyledWave = styled(Wave)`
  margin-right: 8px;
`

const Name = styled.h1`
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 64px;

  color: #af54df;
  margin: 0;
`

const Subtitle = styled.p`
  font-size: 24px;
  margin: 0;
  font-weight: 300;
  color: #98a4a8;

  @media (${breakPoints.phoneOnly}) {
    font-size: 18px;
    margin-top: 12px;
  }
`

const Index = () => (
  <Page active="/" whiteMenu>
    <StyledBg />
    <StyledTriangle />
    <Content>
      <Greeting>
        <StyledWave />
        Hello
      </Greeting>
      <Name>I’m Cosmin</Name>
      <Subtitle>
        JavaScript Developer
        <br />& Machine Learning Enthusiast
      </Subtitle>
    </Content>
  </Page>
)

export default Index
