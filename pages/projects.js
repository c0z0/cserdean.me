import React, { Component } from 'react'
import colorScroller from '../utils/colorScroller'
import Link from 'next/link'

import { red as accentColor, blue, darkBlue } from '../utils/colors'
import Project from '../components/Project'
import Footer from '../components/Footer'

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
				<Project />
				<Project color={'#fff'} titleColor={blue} />
				<Project footerHeight={'64px'} id="ml" />
				<Footer center color={'#000'} />
				<style jsx>{`
					.menu {
						position: absolute;
						top: 16px;
						left: 16px;
					}
					.menu__item {
						font-size: 0.8em;
						text-decoration: none;
						opacity: 0.5;
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
			</div>
		)
	}
}

export default colorScroller(Projects, ['#ffffff', '#000000', '#ffffff'])
