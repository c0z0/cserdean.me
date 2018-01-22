import React, { Component } from 'react'

import { text as textColor } from '../utils/colors'

export default class Project extends Component {
	render() {
		const { title, description, url, imgUrl, footerHeight, color } = this.props

		return (
			<div className={`container ${footerHeight ? 'container--footer' : ''}`}>
				<div className="image-container">
					<img
						src="https://avatar.tobi.sh/test?size=512&type=svg&text=Test"
						className="image"
					/>
				</div>
				<div className="title-container">
					<h3 className="title">Project 1</h3>
					<p className="description">
						Lorem ipsum dolor amet umami flexitarian fanny pack kitsch tumblr
						cardigan hashtag prism godard. Wolf pinterest before they sold out
						post-ironic DIY.
					</p>
				</div>
				<style jsx>{`
					.container {
						color: ${color || textColor}
						display: grid;
						height: 100vh;
						grid-template-columns: 50vw 50vw;
					}

					.container--footer {
						height: calc(100vh - ${footerHeight || '64px'});
					}

					.image-container {
						grid-column: 1 1;
						display: flex;
						align-items: center;
						justify-content: center;
					}

					.image {
						max-height: calc(100vh - 128px);
						max-height: calc(100vh - 128px);
						box-shadow: 5px 5px 29px 0px rgba(0, 0, 0, 0.4);
					}

					.title-container {
						grid-columns: 1 1;
						display: flex;
						flex-direction: column;
						justify-content: center;
						padding: 64px;
					}

					.title {
						font-family: Menlo;
						font-weight: normal;
						text-align: right;
					}

					.description {
						/*font-family: Menlo;*/
						text-align: justify;
					}
				`}</style>
			</div>
		)
	}
}
