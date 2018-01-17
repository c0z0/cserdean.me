function color2rgb(c) {
	const r = parseInt(c.slice(1, 3), 16)
	const g = parseInt(c.slice(3, 5), 16)
	const b = parseInt(c.slice(5, 7), 16)

	return { r, g, b }
}

function color2hex(c) {
	let s = '#'
	s += c.r.toString(16).padStart(2, '0')
	s += c.g.toString(16).padStart(2, '0')
	s += c.b.toString(16).padStart(2, '0')

	return s
}

export default function averageColors(c1, c2, r = 0.5) {
	const rgb1 = color2rgb(c1)
	const rgb2 = color2rgb(c2)

	return color2hex({
		r: Math.floor(r * rgb1.r + (1 - r) * rgb2.r),
		g: Math.floor(r * rgb1.g + (1 - r) * rgb2.g),
		b: Math.floor(r * rgb1.b + (1 - r) * rgb2.b)
	})
}
