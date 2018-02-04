import React, { Component } from 'react'

import Menu from '../../components/Menu.js'
import Footer from '../../components/Footer.js'
import { errorRed, sentimentColors } from '../../utils/colors.js'

const apiRoot = 'http://0.0.0.0:8080/sentiment'

function debounce(fn, delay) {
	var timer = null
	return e => {
		e.persist()
		var context = this,
			args = arguments
		clearTimeout(timer)
		timer = setTimeout(function() {
			fn.bind(context, e)
		}, delay)
	}
}

export default class Sentiment extends Component {
	state = {
		initializing: true,
		text: '',
		prediction: undefined,
		loading: false
	}

	async componentDidMount() {
		try {
			const res = await fetch(apiRoot + '/ping')

			if (res.ok) {
				return this.setState({ initializing: false })
			}
			this.setState({ error: true, initializing: false })
		} catch (e) {
			this.setState({ error: true, initializing: false })
		}
	}

	async predict({ target: { value } }) {
		if (value.length === 0)
			return this.setState({ text: value, prediction: undefined })
		try {
			this.setState({ loading: true, text: value })
			const res = await fetch(apiRoot + '/predict', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					text: value
				})
			})

			if (res.ok) {
				const { prediction } = await res.json()
				return this.setState({ prediction, loading: false })
			}
			this.setState({ error: true, loading: false })
		} catch (e) {
			console.log(e)
			this.setState({ error: true, loading: false })
		}
	}

	renderInput() {
		const { loading, text } = this.state
		return (
			<div className="input__container">
				{text.length > 0 && (
					<button
						className="input__clear"
						onClick={() => this.setState({ text: '', prediction: undefined })}
					>
						x
					</button>
				)}
				<input
					value={text}
					type="text"
					onChange={this.predict.bind(this)}
					className={`input ${loading ? '' : 'input--not-loading'}`}
					placeholder="Type something..."
				/>
				{loading && <span className="input__loading" />}
				<style jsx>{`
					.input__loading {
						position: absolute;
						background: white;
						bottom: 0px;
						height: 1px;
						animation: loading 2s infinite;
					}
					.input {
						width: 300px;
						padding-right: 10px;
						height: 18px;
						border: none;
						border-bottom: solid rgba(255, 255, 255, 0.4) 1px;
						padding: 8px 0;
						outline: none;
						font-size: 16px;
						background: none;
						transition: 0.2s all;
						color: white;
					}
					.input--not-loading:focus {
						border-color: rgba(255, 255, 255, 1);
					}
					.input__container {
						position: relative;
						margin: 32px;
						margin-top: 16px;
					}

					.input__clear {
						background: none;
						border: none;
						outline: none;
						color: white;
						cursor: pointer;
						position: absolute;
						right: 0;
						top: 50%;
						transform: translate(0, -50%);
					}

					@keyframes loading {
						0% {
							left: 0;
							right: 75%;
						}
						50% {
							left: 75%;
							right: 0;
						}
						100% {
							left: 0;
							right: 75%;
						}
					}
				`}</style>
			</div>
		)
	}

	render() {
		const { initializing, error, prediction, loading } = this.state

		return (
			<div>
				<div className="container">
					<div className="ai-menu">
						<a
							href="/ai/sentiment"
							className="ai-menu__item ai-menu__item--active"
						>
							sentiment
						</a>
					</div>
					<Menu color="white" active="ai" />
					<p className="title">
						Sentiment prediction from movie reviews <a>[src]</a>
					</p>
					{initializing && <p className="initializing">loading...</p>}
					{error && <p className="error">something went wrong</p>}
					{!(error || initializing) && this.renderInput()}
					<div className="scale">
						<span className={`scale__indicator`} />
					</div>
					<style jsx>{`
						.title {
							font-size: 0.8em;
						}

						.ai-menu {
							position: absolute;
							top: 16px;
							right: 16px;
							font-family: Menlo;
						}

						.ai-menu__item {
							color: white;
							font-size: 0.8em;
						}

						.ai-menu__item--active {
							text-decoration: underline;
						}

						.container {
							font-family: Menlo;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							height: calc(100vh - 64px);
							color: white;
						}

						.initializing {
							opacity: 0.2;
						}

						.error {
							color: ${errorRed};
						}

						.scale {
							position: relative;
							height: 2px;
							width: 300px;
							background: linear-gradient(
								to right,
								${sentimentColors.join(',')}
							);
						}

						.scale__indicator {
							position: absolute;
							top: -5px;
							bottom: -5px;
							background: white;
							width: 2px;
							left: ${prediction !== undefined ? prediction / 4 * 300 : 150}px;
							transition: all 0.5s;
						}
					`}</style>
					<style jsx global>{`
						body {
							background: ${prediction !== undefined && false
								? this.getColor(prediction)
								: 'black'};
						}
					`}</style>
				</div>
				<Footer color="white" />
			</div>
		)
	}
}
