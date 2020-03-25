import React from 'react';
import styled from 'styled-components';

import Page from '../components/Page';
import * as colors from '../utils/colors';

import Project from '../components/Project';
import { Diamond, Folder } from '../components/Svg';

export const Title = styled.div`
  font-weight: 400;
  line-height: normal;
  font-size: 32px;
  margin-top: 64px;
  margin-bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  color: ${({ dark, theme }) => (dark ? 'white' : theme.colors.foreground)};
`;

export const Subtitle = styled.p`
  font-size: 18px;
  margin: 0;
  margin-bottom: 32px;

  color: ${props => props.theme.colors.subtitle};
`;

export const Experiment = styled.p`
  font-size: 1.5em;
  font-weight: 400;
  padding: 24px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

Experiment.List = styled.div`
  :before {
    content: '';
    display: block;
    height: 1px;
    background: ${p => p.theme.colors.foreground};
    opacity: 0.25;
  }
`;

Experiment.Src = styled.a`
  color: ${colors.blue};
  text-decoration: none;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace, sans-serif;
`;

Experiment.Link = styled.a`
  color: ${colors.blue};
  text-decoration: none;
  margin-right: 12px;
`;

const SHRTIcon = styled.span`
  font-size: 24px;
  text-align: justify;
  color: #222;
  letter-spacing: 0.1em;
`;

export default function Projects() {
  return (
    <Page active="/projects">
      <Title>Projects</Title>
      <Subtitle>Small web development projects</Subtitle>
      <Project.Row>
        <Project
          icon={<Diamond />}
          description="Tiny web app for keeping your online finds. Features desktop client."
          title="Gem"
          titleColor="#75489B;"
          src="https://github.com/c0z0/gem-app"
          href="https://gem.cserdean.com"
        />
        <Project
          icon={<SHRTIcon>SHRT</SHRTIcon>}
          description="URL shortening web app built with Go and Next.js."
          title="SHRT"
          src="https://github.com/c0z0/lambda-shrt"
          href="https://s.cserdean.com"
        />
      </Project.Row>
      <Project.Row>
        <Project
          icon={<Folder />}
          description="File sharing web app built with Go and Next.js."
          title="Transfer"
          src="https://github.com/c0z0/lambda-shrt"
          href="https://s.cserdean.com/t"
        />
        <Project
          icon={<SHRTIcon>CLI</SHRTIcon>}
          description="CLI for interacting with the SHRT web app."
          title="SHRT CLI"
          src="https://github.com/c0z0/shrt-cli"
          href="https://www.npmjs.com/package/shrt-url"
        />
      </Project.Row>
    </Page>
  );
}
