import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import * as breakPoints from '../utils/breakPoints'

const ProjectContainer = styled.div`
  display: flex;
  background: linear-gradient(270deg, #fdfdfd 75%, rgba(253, 253, 253, 0) 90%);
  border-radius: 0px 8px 8px 0px;
  padding: 10px;
  padding-left: 0;
`

const ProjectIcon = styled.div`
  height: 100px;
  width: 100px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProjectBorder = styled.div`
  padding: 1px;
  border-radius: 0px 8px 8px 0px;
  padding: 1px;
  flex: 1;
  background: linear-gradient(270deg, #eee 75%, rgba(253, 253, 253, 0) 90%);

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
`

const ProjectContent = styled.div`
  padding: 10px;
  flex: 1;
`

const ProjectRow = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 40px;
  }

  @media (${breakPoints.phoneOnly}) {
    display: block;
  }
`

const ProjectDescription = styled.p`
  font-size: 16px;
  margin: 0;
`

const ProjectTitle = styled.h1`
  color: ${({ color }) => color};
  font-size: 24px;
  margin: 0;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
`

const ProjectUrl = styled.a`
  color: inherit;
  text-decoration: none;
`

const ProjectSrc = styled.a`
  color: #999999;
  font-size: 16px;

  float: right;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    color: #484848;
  }
`

export default function Project({
  title,
  description,
  src,
  href,
  titleColor,
  icon
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
  )
}

Project.Row = ProjectRow

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  icon: PropTypes.node.isRequired
}

Project.defaultProps = {
  titleColor: '#4848484'
}
