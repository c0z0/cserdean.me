import React from 'react'
import styled from 'styled-components'

import * as breakPoints from '../utils/breakPoints'
import Page from '../components/Page'
import triangle from '../utils/triangle-gs.json'

const StripesWrapper = styled.div.attrs({ 'aria-hidden': '' })`
  box-shadow: inset 0px -20px 60px -25px rgba(0, 0, 0, 0.25);
  height: 95%;
  position: fixed;
  z-index: -1;
  transform: skewY(-12deg);
  top: 0;
  transform-origin: 0;
  left: 0;
  right: 0;

  background: linear-gradient(45deg, #dd47e0 0%, #0787ea 50%, #0b69dd 100%);

  @media (${breakPoints.phoneOnly}) and (orientation: landscape) {
    height: 125%;
    overflow: hidden;
  }
`

const Stripe = styled.div`
  width: 33%;
  height: 15%;
  display: inline-block;

  &:first-child {
    background: linear-gradient(135deg, #137fef 0%, #2279e7 100%);
    width: 34%;
  }

  &:nth-child(2) {
    background: linear-gradient(135deg, #137fef 0%, #5b75ef 100%);
    width: 50%;
  }

  &:nth-child(3) {
    background: linear-gradient(135deg, #726fee 0%, #6f70ee 100%);
    opacity: 0;
  }

  &:nth-child(4) {
    background: linear-gradient(45deg, #e12fdb 15%, #726fee 100%);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
  }

  &:nth-child(5) {
    background: linear-gradient(315deg, #0082ef 0%, #3d7fe8 100%);
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20%;
    opacity: 0;
  }

  @media (${breakPoints.tabletUp}) {
    height: 25%;

    &:nth-child(2) {
      width: 33%;
    }

    &:nth-child(3) {
      opacity: 1;
    }

    &:nth-child(4) {
      width: 20%;
    }

    &:nth-child(5) {
      opacity: 1;
    }
  }
`

const Triangle = styled.img.attrs({
  src: triangle,
  alt: 'triangle-logo'
})`
  height: 450px;
  position: absolute;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.1));
  left: 110%;
  top: -50%;
  display: none;
  transform: rotate(10deg) translateX(10%);

  @media (${breakPoints.tabletUp}) {
    display: block;
  }
`

const Content = styled.div`
  margin-top: 128px;
  @media (${breakPoints.tabletUp}) {
    margin: 0;
    position: absolute;
    top: 50%;
    left: calc(100vh - 900) / 2;
    transform: translateY(-50%);
    display: flex;
    flex-direction: row;
  }
`

const Greeting = styled.h3`
  font-weight: 300;
  font-size: 3rem;
  text-align: center;
  color: white;
  margin: 3rem 0;

  @media (${breakPoints.tabletUp}) {
    white-space: nowrap;
    font-size: 4rem;
    text-align: center;
  }
`

const GreetingSecondary = styled.p`
  line-height: 1.2rem;
  text-align: center;

  font-size: 1rem;
  color: white;
`

const Stripes = () => (
  <StripesWrapper>
    <Stripe />
    <Stripe />
    <Stripe />
    <Stripe />
    <Stripe />
  </StripesWrapper>
)

const Index = () => (
  <Page active="/" whiteMenu>
    <Stripes />
    <Content>
      <div>
        <Greeting>Hi, I{`'`}m Cosmin.</Greeting>
        <GreetingSecondary>
          JavaScript Developer & Machine Learning Enthusiast
        </GreetingSecondary>
      </div>
      <Triangle />
    </Content>
  </Page>
)

export default Index
