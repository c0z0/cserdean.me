import React, { Component } from 'react'

export default class Project extends Component {
	render() {
		const { title, description, url, imgUrl } = this.props

		return (
			<div className="container">
				<div className="image-container">
					<img
						src="https://avatar.tobi.sh/test?size=512&type=svg&text=Test"
						className="image"
					/>
				</div>
				<div className="title-container" />
				<style jsx>{`
					.container {
						display: grid;
						height: 100vh;
						grid-template-columns: 50vw 50vw;
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
					}
				`}</style>
			</div>
		)
	}
}
