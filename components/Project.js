import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as breakPoints from '../utils/breakPoints';

const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0px 8px 8px 0px;
  padding: 10px;
  padding-left: 0;
  background: ${p => p.theme.colors.background};
`;

const ProjectIcon = styled.div`
  height: 100px;
  width: 100px;
  background: #ffffff;
  /*  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1); */
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectBorder = styled.div`
  padding: 1px;
  border-radius: 0px 8px 8px 0px;
  flex: 1;
  background: linear-gradient(
    270deg,
    ${p => p.theme.colors.highlight} 75%,
    rgba(253, 253, 253, 0) 90%
  );

  @media (${breakPoints.phoneOnly}) {
    &:first-child {
      margin-bottom: 40px;
    }
  }

  @media (${breakPoints.tabletUp}) {
    display: block;

    &:first-child {
      margin-right: 40px;
    }
  }
`;

const ProjectContent = styled.div`
  padding: 20px;
  padding-right: 12px;
  flex: 1;
`;

const ProjectRow = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 40px;
  }

  @media (${breakPoints.phoneOnly}) {
    display: block;
  }
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: #999;
  margin: 0;
  text-align: justify;
`;

const ProjectTitle = styled.h1`
  color: ${({ color, theme }) => color || theme.colors.foreground};
  font-size: 24px;
  margin: 0;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
`;

const ProjectUrl = styled.a`
  color: inherit;
  text-decoration: none;
`;

const ProjectSrc = styled.a`
  color: ${p => p.theme.colors.foreground};
  font-size: 16px;
  float: right;
  text-decoration: none;
  opacity: 0.66;
  transition: opacity 0.2s linear;
  :hover {
    opacity: 1;
  }
`;

export default function Project({
  title,
  description,
  src,
  href,
  titleColor,
  icon,
}) {
  return (
    <ProjectBorder>
      <ProjectContainer>
        <ProjectUrl href={href}>
          <ProjectIcon>{icon}</ProjectIcon>
        </ProjectUrl>
        <ProjectContent>
          <ProjectTitle color={titleColor}>
            <ProjectUrl href={href}>{title}</ProjectUrl>
            <ProjectSrc href={src}>[src]</ProjectSrc>
          </ProjectTitle>
          <ProjectDescription>{description}</ProjectDescription>
        </ProjectContent>
      </ProjectContainer>
    </ProjectBorder>
  );
}

Project.Row = ProjectRow;

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  icon: PropTypes.node.isRequired,
};

Project.defaultProps = {
  titleColor: null,
};
