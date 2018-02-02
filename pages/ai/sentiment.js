import React, { Component } from 'react'

import Menu from '../../components/Menu.js'
import { errorRed, sentimentColors } from '../../utils/colors.js'

const apiRoot = 'http://0.0.0.0:8080/sentiment'

export default class Sentiment extends Component {
	state = {
		initializing: true
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
		try {
			this.setState({ loading: true })
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
		const { loading } = this.state
		return (
			<div className="input__container">
				<input
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

	getColor(prediction) {
		console.log(sentimentColors[prediction])
		return sentimentColors[prediction]
	}

	render() {
		const { initializing, error, prediction } = this.state

		return (
			<div className="container">
				<Menu color="white" active="ai" />
				{initializing && <p className="initializing">loading...</p>}
				{error && <p className="error">something went wrong</p>}
				{!(error || initializing) && this.renderInput()}
				<div className="scale" />
				<span className="positive">positive</span>
				<span className="negative">negative</span>
				<span className="neutral">neutral</span>
				<style jsx>{`
					.container {
						display: flex;
						justify-content: center;
						align-items: center;
						height: 100vh;
						color: white;
					}

					.initializing {
						font-family: Menlo;
						opacity: 0.2;
					}

					.error {
						font-family: Menlo;
						color: ${errorRed};
					}

					.scale {
						position: absolute;
						bottom: 16px;
						left: 16px;
						height: 150px;
						width: 10px;
						background: linear-gradient(
							to bottom,
							${sentimentColors.join(',')}
						);
					}

					.positive,
					.negative,
					.neutral {
						position: absolute;
						font-family: Menlo;
						font-size: 13px;
						left: 30px;
						opacity: 0.3;
					}

					.positive {
						bottom: 16px;
					}

					.neutral {
						bottom: 91px;
					}

					.negative {
						bottom: 156px;
					}
				`}</style>
				<style jsx global>{`
					body {
						background: ${prediction !== undefined
							? this.getColor(prediction)
							: 'black'};
					}
				`}</style>
			</div>
		)
	}
}
