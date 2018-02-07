import React, { Component } from 'react'
import Head from 'next/head'

import Menu from '../../components/Menu.js'
import Footer from '../../components/Footer.js'
import { errorRed, sentimentColors } from '../../utils/colors.js'

const apiRoot = 'https://ai.cserdean.me/ai-api'

export default class Translate extends Component {
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
			return this.setState({ text: value, prediction: '' })
		try {
			this.setState({ loading: true, text: value })
			const res = await fetch(apiRoot + '/translate', {
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
				return this.setState({
					prediction: this.state.text.length > 0 ? prediction : '',
					loading: false
				})
			}
			this.setState({ error: true, loading: false })
		} catch (e) {
			console.log(e)
			this.setState({ error: true, loading: false })
		}
	}

	renderInputs() {
		const { loading, text, prediction } = this.state
		return (
			<div>
				<div className="input__container">
					<img
						className="flag"
						src="https://cdn.rawgit.com/hjnilsson/country-flags/6dc35d6c/png250px/gb.png"
					/>
					{text.length > 0 && (
						<button
							className="input__clear"
							onClick={() => this.setState({ text: '', prediction: '' })}
						>
							+
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
				</div>
				<div className="input__container">
					<img
						className="flag"
						src="https://cdn.rawgit.com/hjnilsson/country-flags/6dc35d6c/png250px/de.png"
					/>
					<input value={prediction} type="text" disabled className={`input `} />
				</div>
				<style jsx>{`
					.input__loading {
						position: absolute;
						background: white;
						bottom: 0px;
						height: 1px;
						animation: loading 2s infinite;
					}

					.flag {
						position: absolute;
						top: 50%;
						left: 0;
						transform: translate(0, -50%);
						height: 18px;
					}

					.input {
						width: 250px;
						height: 18px;
						border: none;
						border-bottom: solid rgba(255, 255, 255, 0.4) 1px;
						padding: 8px 0;
						outline: none;
						font-size: 16px;
						background: none;
						transition: 0.2s all;
						color: white;
						padding-right: 10px;
						padding-left: 40px;
					}
					.input--not-loading:focus {
						border-color: rgba(255, 255, 255, 1);
					}
					.input__container {
						display: inline-block;
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
						right: -5px;
						top: 50%;
						transform: translate(0, -50%) rotate(45deg);
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
				<Head>
					<title>Ai | Cosmin Serdean</title>
				</Head>
				<div className="container">
					<Menu color="white" active="ai" />
					<h4 className="title">
						Neural English to German translation{' '}
						<a
							href="https://github.com/c0z0/neural-translation"
							className="src"
						>
							[src]
						</a>
					</h4>
					{initializing && <p className="initializing">loading...</p>}
					{error && <p className="error">something went wrong</p>}
					{!(error || initializing) && this.renderInputs()}
					<style jsx>{`
						.src {
							color: white;
							text-decoration: none;
						}

						.title {
							font-size: 0.8em;
							font-weight: normal;
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
					`}</style>
					<style jsx global>{`
						body {
							background: black;
						}
					`}</style>
				</div>
				<Footer color="white" />
			</div>
		)
	}
}
