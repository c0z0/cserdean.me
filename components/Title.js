import React, { Component } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

import { darkBlue as accentColor, text as textColor } from '../utils/colors'

export default class Title extends Component {
	state = {
		visible: true,
		title:
			"Hi, I'm Cosmin Serdean and I'm a software developer. I like to build stuff with React and Node. I also enjoy doing magic with Neural Networks.",
		remove: 94,
		typed: false,
		tooltipVisible: false
	}

	onPress({ keyCode, key }) {
		let { remove, typed } = this.state
		const { title, visible } = this.state
		if (!visible) return
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
			<VisibilitySensor
				partialVisibility
				onChange={visible => this.setState({ visible })}
			>
				<div
					className="container"
					onClick={() => {
						if (this.hiddenInput) {
							this.hiddenInput.focus()
						}
					}}
				>
					<a
						href="https://github.com/c0z0/cserdean.me"
						className="src"
						target="_blank"
					>
						[src]
					</a>
					{!isMobile && (
						<p className="title">
							{titleP1}
							<span className="name">{titleBold}</span>
							{titleP2}
							<a href="http://github.com/c0z0/lollio">{stuffText}</a>
							{titleP3}
							<a href="http://github.com/c0z0/contrast_neural_net">
								{magicText}
							</a>
							{titleP4}
							<span className="block">|</span>
						</p>
					)}
					{!isMobile && (
						<p className={`tooltip ${showTooltip ? 'visible' : ''}`}>
							try typing
						</p>
					)}
					{isMobile && (
						<p className="title mobile">
							{' '}
							{titleP1}
							<span className="name">{titleBold}</span>
							{titleP2}
							<a href="http://github.com/c0z0/lollio">{stuffText}</a>
							{titleP3}
							<a href="http://github.com/c0z0/contrast_neural_net">
								{magicText}
							</a>
							{titleP4}
						</p>
					)}
					<div className="menu">
						<a href="mailto:cosmoserdean@gmail.com">Email</a>
						<a href="/static/cv_cosmin_serdean.pdf">CV</a>
						<a href="https://github.com/c0z0" target="_blank">
							GitHub
						</a>
					</div>
					<style jsx>{`
						.menu {
							position: absolute;
							bottom: 16px;
						}

						.menu a:hover {
							opacity: 1;
						}

						.menu a {
							margin: 0 16px;
							font-size: 0.8em;
							text-decoration: none;
							opacity: 0.5;
							color: ${accentColor} !important;
							transition: all 0.2s;
							font-family: Menlo;
						}

						.tooltip.visible {
							opacity: 0.4;
							animation: fadein 0.5s;
						}

						.tooltip {
							display: none;
							margin: 0;
							font-size: 0.8em;
							opacity: 0;
						}

						.src {
							font-size: 0.8em;
							text-decoration: none;
							position: absolute;
							top: 16px;
							left: 16px;
							opacity: 0.5;
							color: ${accentColor} !important;
							transition: all 0.2s;
							font-family: Menlo;
						}

						.src:hover {
							opacity: 1;
						}

						.block {
							font: Menlo;
							color: ${accentColor};
							font-size: 1.1em;
							animation: cursor 1s infinite;
						}

						.name {
							font-family: Menlo;
							text-decoration: underline;
						}

						.title {
							margin: 16px 128px;
							text-align: justify;
						}

						.title.mobile {
							margin: 0 16px;
						}

						.container {
							position: relative;
							height: 100vh;
							color: ${textColor};
							font-family: Lato;
							display: flex;
							align-items: center;
							justify-content: center;
							flex-direction: column;
						}

						.title a {
							transition: all 0.2s;
							color: ${textColor} !important;
						}

						.title a:hover {
							color: ${accentColor} !important;
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
			</VisibilitySensor>
		)
	}
}
