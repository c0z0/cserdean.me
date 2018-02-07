import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

const AiIndex = () => (
	<div>
		<Head>
			<title>Ai | Cosmin Serdean</title>
		</Head>
		<div className="container">
			<Menu color="white" active="ai" />
			<h4 className="title">Ai demos</h4>
			<ul className="list">
				<li>
					<Link href="/ai/sentiment">
						<a className="item" href="/ai/sentiment">
							Sentiment classifier trained on movie reviews
						</a>
					</Link>{' '}
					<a
						href="https://github.com/c0z0/sentiment-classifier"
						className="item"
					>
						[src]
					</a>
				</li>
				<li>
					<Link href="/ai/translate">
						<a className="item" href="/ai/translate">
							Neural English to German translator
						</a>
					</Link>{' '}
					<a
						href="https://github.com/c0z0/sentiment-classifier"
						className="item"
					>
						[src]
					</a>
				</li>
			</ul>
			<style jsx>{`
				.container {
					color: white;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					height: calc(100vh - 64px);
					font-family: Menlo;
				}

				.title {
					font-weight: normal;
				}

				.item {
					color: white;
					text-decoration: none;
					font-size: 0.8em;
				}

				.list {
					list-style-type: square;
				}

				.list li {
					margin: 12px 0;
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

export default AiIndex
