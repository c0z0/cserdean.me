import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { darkBlue as accentColor, text as textColor } from '../utils/colors'
import Footer from './Footer'
import Menu from './Menu'

export default class Title extends Component {
	state = {
		title:
			"Hi, I'm Cosmin Serdean and I'm a software developer. I like to build stuff with React and Node. I also enjoy doing magic with Neural Networks.",
		remove: 94,
		typed: false,
		tooltipVisible: false
	}

	onPress({ keyCode, key }) {
		let { remove, typed } = this.state
		const { title } = this.state
		if (keyCode == 8) {
			typed = true
			remove = remove >= title.length ? remove : remove + 1
		} else {
			remove = remove > 0 ? remove - 1 : remove
			typed = true
		}

		this.setState({ remove, typed })
	}

	componentDidMount() {
		setTimeout(() => this.setState({ tooltipVisible: true }), 5 * 1000)
		document.addEventListener('keydown', this.onPress.bind(this), false)
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', this.onPress.bind(this), false)
	}

	render() {
		const { title, remove: stateRemove, typed, tooltipVisible } = this.state
		const { isMobile } = this.props

		const showTooltip = tooltipVisible && !typed

		const remove = isMobile ? 0 : stateRemove

		// Slice to display only the tiped part of the title
		const shortenedTitle = title.slice(0, title.length - remove)

		const nameStart = title.search('Cosmin Serdean')
		const nameEnd = nameStart + 'Cosmin Serdean'.length

		const stuffStart = title.search('stuff')
		const stuffEnd = stuffStart + 'stuff'.length

		const magicStart = title.search('magic')
		console.log(magicStart)
		const magicEnd = magicStart + 'magic'.length

		// Text before name
		const titleP1 = shortenedTitle.slice(0, nameStart)

		// Name
		const titleBold = shortenedTitle.slice(nameStart, nameEnd)

		// Text after name
		const titleP2 = shortenedTitle.slice(nameEnd, stuffStart)

		const stuffText = shortenedTitle.slice(stuffStart, stuffEnd)

		const titleP3 = shortenedTitle.slice(stuffEnd, magicStart)

		const magicText = shortenedTitle.slice(magicStart, magicEnd)

		const titleP4 = shortenedTitle.slice(magicEnd)

		return (
			<div className="container">
				<Head>
					<title>Cosmin Serdean</title>
				</Head>
				<Menu color={accentColor} active="/" />

				{!isMobile && (
					<p className="title">
						{titleP1}
						<span className="title__name">{titleBold}</span>
						{titleP2}
						<Link href="/projects" prefetch>
							<a href="" className="title__link">
								{stuffText}
							</a>
						</Link>
						{titleP3}
						<a
							href="http://github.com/c0z0/contrast_neural_net"
							className="title__link"
						>
							{magicText}
						</a>
						{titleP4}
						<span className="title__block">|</span>
					</p>
				)}
				{!isMobile && (
					<p className={`tooltip ${showTooltip ? 'tooltip--visible' : ''}`}>
						try typing
					</p>
				)}
				{isMobile && (
					<p className="title title--mobile">
						{' '}
						{titleP1}
						<span className="title__name">{titleBold}</span>
						{titleP2}
						<a href="http://github.com/c0z0/lollio" className="title__link">
							{stuffText}
						</a>
						{titleP3}
						<a
							href="http://github.com/c0z0/contrast_neural_net"
							className="title__link"
						>
							{magicText}
						</a>
						{titleP4}
					</p>
				)}
				<Footer absolute color={accentColor} />
				<style jsx>{`
					.tooltip {
						margin: 0;
						font-size: 0.8em;
						opacity: 0;
					}

					.tooltip--visible {
						opacity: 0.4;
						animation: fadein 0.5s;
					}

					.title__block {
						font: Menlo;
						color: ${accentColor};
						font-size: 1.1em;
						animation: cursor 1s infinite;
					}

					.title__name {
						font-family: Menlo;
						text-decoration: underline;
					}

					.title {
						margin: 16px 128px;
						text-align: justify;
					}

					.title--mobile {
						margin: 0 16px;
					}

					.container {
						position: relative;
						height: 100vh;
						color: ${textColor};
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;
					}

					.title__link {
						transition: all 0.2s;
						color: ${textColor} !important;
					}

					.title__link:hover {
						color: ${accentColor} !important;
					}

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

					@keyframes cursor {
						0% {
							opacity: 0;
						}
						40% {
							opacity: 0;
						}
						50% {
							opacity: 1;
						}
						90% {
							opacity: 1;
						}
						100% {
							opacity: 0;
						}
					}

					@keyframes fadein {
						0% {
							opacity: 0;
						}

						100% {
							opacity: 0.4;
						}
					}
				`}</style>
			</div>
		)
	}
}
