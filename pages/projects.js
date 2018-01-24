import React, { Component } from 'react'
import colorScroller from '../utils/colorScroller'
import Link from 'next/link'
import Head from 'next/head'

import projects from '../utils/projects'

import {
	red as accentColor,
	blue,
	darkBlue,
	text as textColor
} from '../utils/colors'
import Project from '../components/Project'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

class Projects extends Component {
	render() {
		return (
			<div className="container">
				<Head>
					<title>Projects | Cosmin Serdean</title>
				</Head>
				<Menu color={accentColor} active="projects" />
				{projects.map((p, i) => (
					<Project
						key={i}
						{...p}
						footerHeight={i === projects.length - 1 ? '64px' : undefined}
					/>
				))}
				<Footer center color={projects[projects.length - 1].footerColor} />
				<style jsx>{`
					.container {
						position: relative;
					}
				`}</style>
				<style jsx global>{`
					body {
						background: white;
					}
				`}</style>
			</div>
		)
	}
}

export default colorScroller(Projects, projects.map(p => p.background))
