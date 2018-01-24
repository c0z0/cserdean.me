import React, { Component } from 'react'
import colorScroller from '../utils/colorScroller'
import Link from 'next/link'

import { red as accentColor, blue, darkBlue } from '../utils/colors'
import Project from '../components/Project'
import Footer from '../components/Footer'

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
				<div className="menu">
					<a
						href="https://github.com/c0z0/cserdean.me"
						className="menu__item"
						target="_blank"
					>
						[src]
					</a>
					<Link href="/" prefetch>
						<a href="" className="menu__item" target="_blank">
							home
						</a>
					</Link>
				</div>
				{projects.map((p, i) => (
					<Project
						key={i}
						{...p}
						footerHeight={i === projects.length - 1 ? '64px' : undefined}
					/>
				))}
				<Footer center color={'#fff'} />
				<style jsx>{`
					.menu {
						position: absolute;
						top: 16px;
						left: 16px;
					}
					.menu__item {
						font-size: 0.8em;
						text-decoration: none;
						opacity: 0.8;
						color: ${accentColor} !important;
						transition: all 0.2s;
						font-family: Menlo;
					}
					.menu__item:not(:last-child) {
						padding-right: 8px;
					}

					.menu__item:hover {
						opacity: 1;
					}

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
