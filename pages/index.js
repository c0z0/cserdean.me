import React, { Component } from 'react'

export default class extends Component {
	state = {
		title: "Hi, I'm Cosmin Serdean and I'm a software developer.",
		remove: 0
	}

	onPress({ keyCode }) {
		let { remove } = this.state
		const { title } = this.state
		if (keyCode == 8) {
			console.log(keyCode)
			remove = remove >= title.length ? remove : remove + 1
		} else {
			remove = remove > 0 ? remove - 1 : remove
		}

		this.setState({ remove })
	}

	componentDidMount() {
		document.addEventListener('keydown', this.onPress.bind(this), false)
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', this.onPress.bind(this), false)
	}

	render() {
		const { title, remove } = this.state

		const shortenedTitle = title.slice(0, title.length - remove)

		const titleP1 = shortenedTitle.slice(0, 8)

		const titleBold = shortenedTitle.slice(8, 22)

		const titleP2 = shortenedTitle.slice(22)

		return (
			<div className="container">
				<div>
					<h2>
						{titleP1} <span>{titleBold}</span>
						{titleP2}
					</h2>
					<div className="block" />
				</div>
				<style jsx global>{`
					body {
						margin: 0;
					}
				`}</style>
				<style jsx>{`
					.title {
						display: flex;
						align-items: center;
					}

					.block {
						width: 10px;
						height: 1.5em;
						margin-left: 5px;
						background: #484848;
						display: inline-block;
						animation: cursor 1s infinite;
					}

					h2 span {
						font-weight: 800;
					}
					h2 {
						display: inline-block;
						font-weight: normal;
					}
					.container {
						height: 100vh;
						color: #484848;
						font-family: Menlo;
						display: flex;
						align-items: center;
						justify-content: center;
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
				`}</style>
			</div>
		)
	}
}
