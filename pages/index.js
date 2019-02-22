import React from 'react'
import styled from 'styled-components'

import * as breakPoints from '../utils/breakPoints'
import Page from '../components/Page'
import triangle from '../utils/triangle-gs.json'

const Triangle = styled.img.attrs({
  src: triangle,
  alt: 'triangle-logo',
  draggable: false
})`
  height: 450px;
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

const Bg = props => (
  <svg viewBox="0 0 100 100" style={{}} {...props}>
    <polygon
      points="66,0 100,0 100,100 0,100"
      fill="url(#prefix__paint0_linear)"
    />
    <defs>
      <linearGradient
        id="prefix__paint0_linear"
        x1={100}
        y1={100}
        x2={33}
        y2={100}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0787EA" />
        <stop offset={1} stopColor="#B454E2" />
      </linearGradient>
    </defs>
  </svg>
)

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

const Wave = styled.img.attrs({ src: '/static/wave.png', draggable: false })`
  width: 24px;
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
    <Triangle />
    <Content>
      <Greeting>
        <Wave />
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
