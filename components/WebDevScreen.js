import React from 'react'

const WebDevScreen = ({ opacity }) => {
	return (
		<div className="container">
			<p>
				I really like JavaScript. I usually build{' '}
				<a href="https://github.com/c0z0/lollio" target="_blank">
					stuff
				</a>{' '}
				using React, Node on the{' '}
				<a href="https://github.com/c0z0/lollio-api" target="_blank">
					backend
				</a>{' '}
				and GraphQL to connect it all.
			</p>
			<style jsx>{`
				a {
					color: white !important;
				}

				.container {
					height: 100vh;
					display: flex;
					align-items: center;
					justify-content: center;
					font-family: Lato;
					color: #fff;
				}
			`}</style>
		</div>
	)
}

export default WebDevScreen
