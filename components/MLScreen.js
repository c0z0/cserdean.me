import React from 'react'

const MLScreen = ({ opacity }) => {
	return (
		<div className="container">
			<p>
				I also got hooked on learning about Machine Learning. Even built a few
				projects using Deep Neural Networks.
			</p>
			<style jsx>{`
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

export default MLScreen
