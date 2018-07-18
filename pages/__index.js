import React from 'react'

import { darkBlue } from '../utils/colors'
import Menu from '../components/Navbar'

const Index = () => (
	<div className="container">
		<Menu active="/" />
		<div className="content">
			<div className="content__left">
				<h3 className="greeting">
					Hi, I'm <span className="greeting__name">Cosmin</span>.
					<span className="greeting__secondary">
						<br />
						JavaScript Developer & Machine Learning Enthusiast
					</span>
				</h3>
			</div>
			<div className="content__right">
				<img src="/static/triangle.svg" className="triangle" />
			</div>
		</div>
		<style jsx>{`
			.footer {
				display: flex;
				justify-content: center;
				margin: 20px 0;
			}

			@keyframes hover {
				0,
				100% {
					transform: rotate(10deg) translateX(10%);
				}
				50% {
					transform: rotate(5deg) translate(11%, -10%);
				}
			}

			.triangle {
				height: 50vh;
				transform: rotate(10deg) translateX(10%);
				animation: hover 20s infinite ease-in-out;
			}

			.footer__item {
				color: #888;
				margin: 0 30px;
				text-decoration: none;
			}

			.greeting {
				font-weight: 300;
				font-size: 4rem;
				text-align: center;
				color: #484848;
			}

			.greeting__name {
				color: ${darkBlue};
			}

			.greeting__secondary {
				line-height: 1rem;

				font-size: 1rem;
				color: #888;
			}

			.content {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: space-between;
				max-width: 900px;
				margin: 0 auto;
			}

			.container {
				display: flex;
				flex-direction: column;
				min-height: 100vh;
				font-size: 12px;
				font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
					'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans';
			}

			.footer {
				padding: 40px;
				background: #eee;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: row-reverse;
			}

			.footer__triangle {
				height: 60px;
				filter: grayscale() opacity(0.4);
			}

			.footer__name {
				margin: 10px;
				color: #888;
			}
		`}</style>
	</div>
)

export default Index
