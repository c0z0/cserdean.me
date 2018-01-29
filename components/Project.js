import React, { Component } from 'react'

import { text as textColor } from '../utils/colors'

export default class Project extends Component {
	render() {
		const {
			title,
			description,
			url,
			imgUrl,
			footerHeight,
			color,
			titleColor,
			id,
			placeholderUrl,
			srcUrl
		} = this.props

		return (
			<div
				className={`container ${footerHeight ? 'container--footer' : ''}`}
				id={id}
			>
				<div className="image-container">
					<img
						src={
							imgUrl
								? imgUrl
								: `https://avatar.tobi.sh/${title.toLowerCase()}g?size=512&type=svg`
						}
						className="image"
					/>
				</div>
				<div className="text-container">
					<h3 className="title">
						<a href={url} className="title__url" target="_blank">
							{title}
						</a>
						{srcUrl && (
							<a href={srcUrl} className="title__url" target="_blank">
								[src]
							</a>
						)}
					</h3>
					<p className="description">{description}</p>
				</div>
				<style jsx>{`
					.container {
						color: ${color || textColor}
						display: flex;
						height: 100vh;
					}

					.container--footer {
						height: calc(100vh - ${footerHeight || '64px'});
					}

					.image-container {
						flex: 1;
						display: flex;
						align-items: center;
						justify-content: center;
					}
					
					.image {
						max-width: calc(100% - 128px);
						max-height: calc(100% - 128px);
						box-shadow: 5px 5px 29px 0px rgba(0, 0, 0, 0.4);
						border-radius: 4px;
					}
					
					.text-container {
						flex: 1;
						display: flex;
						flex-direction: column;
						justify-content: center;
					}

					.title {
						font-family: Menlo;
						${titleColor ? `color: ${titleColor};` : ''}
						font-weight: normal;
						text-align: left;
						padding: 0 64px;						
					}

					.title__url {
						color: inherit !important;
					}

					.title__url:nth-child(2) {
						color: inherit !important;
						text-decoration: none;
						margin-left: 4px;
					}

					.description {
						padding: 0 64px;						
						text-align: justify;
					}

					@media only screen and (max-width : 1024px) {
							.container {
								flex-direction: column;
							}

							.image-container {
								flex: 2;
							}

							.image {
								max-width: calc(100% - 32px);
								max-height: calc(100% - 32px);
								
							}

							.title, .description {
								padding: 0 16px;
							}
						}
				`}</style>
			</div>
		)
	}
}
