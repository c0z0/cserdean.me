import Document, { Head, Main, NextScript } from 'next/document'

import { text as themeColor } from '../utils/colors'

const favicon = 'dark-blue'

export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="theme-color" content={themeColor} />
					<link
						href="https://fonts.googleapis.com/css?family=Lato"
						rel="stylesheet"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href={`/static/favicon-${favicon}.png`}
					/>
					<title>Cosmin Serdean</title>
					<style>{`body { margin: 0; font-family: Lato; }`}</style>
				</Head>
				<body>
					<style jsx global>{`
						body {
							margin: 0;
						}
					`}</style>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}
