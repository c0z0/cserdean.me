import React from 'react'

import { darkBlue } from '../utils/colors'

const Footer = ({ color, absolute, background, height }) => (
	<div className={`footer ${absolute ? 'footer--absolute' : 'footer--block'}`}>
		{!absolute && <span className="footer__name">Cosmin Serdean</span>}
		<div className="footer__inner">
			<a href="mailto:cosmoserdean@gmail.com" className="footer__item">
				Email
			</a>
			<a href="/static/cv_cosmin_serdean.pdf" className="footer__item">
				CV
			</a>
			<a
				href="https://github.com/c0z0"
				target="_blank"
				className="footer__item"
			>
				GitHub
			</a>
		</div>
		<style jsx>{`
			.footer--block {
				padding: 0 64px;
				background: ${background || 'rgba(0, 0, 0, 0)'};
				height: ${height || '64px'};
				display: flex;
				align-items: center;
				justify-content: space-around;
				margin: 0 32px;
			}

			.footer__inner {
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.footer--absolute {
				background: ${background || 'rgba(0, 0, 0, 0)'};
				height: ${height || '64px'};
				display: flex;
				align-items: center;
				justify-content: center;
				position: absolute;
				bottom: 16px;
			}

			.footer__item {
				margin: 0 16px;
				font-size: 0.8em;
				text-decoration: none;
				opacity: 0.5;
				color: ${color || darkBlue} !important;
				transition: all 0.2s;
				font-family: Menlo;
			}

			.footer__item:hover {
				opacity: 1;
			}

			.footer__name {
				font-size: 0.8em;
				text-decoration: none;
				opacity: 0.5;
				color: ${color || darkBlue} !important;
				transition: all 0.2s;
				font-family: Menlo;
			}
		`}</style>
	</div>
)

export default Footer
