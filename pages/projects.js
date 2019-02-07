import React from 'react'
import styled from 'styled-components'

import Page from '../components/Page'
import * as colors from '../utils/colors'

export const Title = styled.div`
  font-size: 2.5em;
  margin-bottom: 12px;
  font-weight: 400;
  color: ${({ dark }) => (dark ? 'white' : '#484848')};
`

export const Subtitle = styled.div`
  color: #888;
  margin-bottom: 30px;
  font-size: 1.5em;
`

export const Experiment = styled.p`
  font-size: 1.5em;
  font-weight: 400;
  padding: 24px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

Experiment.List = styled.div`
  border-top: 1px ${({ dark }) => (dark ? '#222' : '#eee')} solid;
`

Experiment.Src = styled.a`
  color: ${colors.blue};
  text-decoration: none;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace, serif;
`

Experiment.Link = styled.a`
  color: ${colors.blue};
  text-decoration: none;
  margin-right: 12px;
`

export default function Projects() {
  return (
    <Page active="/projects">
      <Title>Projects</Title>
      <Subtitle>Small web development projects</Subtitle>
      <Experiment.List>
        <Experiment>
          <Experiment.Link href="https://gem.cserdean.me">
            Gem - Tiny web app for keeping your online finds
          </Experiment.Link>
          <Experiment.Src href="https://github.com/c0z0/gem-app">
            [src]
          </Experiment.Src>
        </Experiment>
        <Experiment>
          <Experiment.Link href="https://s.cserdean.me">
            SHRT - URL shortening app built with Go and Next.js
          </Experiment.Link>
          <Experiment.Src href="https://github.com/c0z0/lambda-shrt">
            [src]
          </Experiment.Src>
        </Experiment>
        <Experiment>
          <Experiment.Link href="https://s.cserdean.me/t">
            Transfer - File sharing app built with Go and Next.js
          </Experiment.Link>
          <Experiment.Src href="https://github.com/c0z0/lambda-shrt">
            [src]
          </Experiment.Src>
        </Experiment>
        <Experiment>
          <Experiment.Link href="https://www.npmjs.com/package/shrt-url">
            SHRT CLI - CLI for interacting with the SHRT web app
          </Experiment.Link>
          <Experiment.Src href="https://github.com/c0z0/shrt-cli">
            [src]
          </Experiment.Src>
        </Experiment>
      </Experiment.List>
    </Page>
  )
}
