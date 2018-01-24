import React, { Component } from 'react'
import colorScroller from '../utils/colorScroller'
import Link from 'next/link'

import { red as accentColor, blue, darkBlue } from '../utils/colors'
import Project from '../components/Project'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

const projects = [
	{
		title: 'Email login',
		url: 'https://email-login.demos.cserdean.me',
		description:
			'Simple login strategy demo by sending an email with a verification link.',
		color: '#fff'
	}
]

class Projects extends Component {
	render() {
		return (
			<div className="container">
				<Menu color={accentColor} active="projects" />
				{projects.map((p, i) => (
					<Project
						key={i}
						{...p}
						footerHeight={i === projects.length - 1 ? '64px' : undefined}
					/>
				))}
				<Footer center color={'#fff'} />
				<style jsx>{`
					.container {
						position: relative;
					}
				`}</style>
				<style jsx global>{`
					body {
						background: black;
					}
				`}</style>
			</div>
		)
	}
}

export default Projects

//export default colorScroller(Projects, ['#00000', '#000000'])
