import React, { Component } from 'react'

export default class ProgressiveImage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			image: props.placeholder,
			loading: true
		}
	}

	componentDidMount() {
		const { src } = this.props
		this.loadImage.bind(this)(src)
	}

	componentWillUnmount() {
		if (this.image) {
			this.image.onload = null
			this.image.onerror = null
		}
	}

	loadImage(src) {
		if (this.image) {
			this.image.onload = null
			this.image.onerror = null
		}
		const image = new Image()
		this.image = image
		image.onload = this.onLoad.bind(this)
		image.src = src
	}

	onLoad() {
		this.setState({
			image: this.image.src,
			loading: false
		})
	}
	render() {
		const { image, loading } = this.state
		const { children } = this.props

		return children(image, loading)
	}
}
