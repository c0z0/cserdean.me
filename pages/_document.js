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
						rel="apple-touch-icon"
						sizes="180x180"
						href="/static/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/static/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/static/favicon-16x16.png"
					/>
					<link rel="manifest" href="/static/manifest.json" />
					<link rel="shortcut icon" href="/static/favicon.ico" />
					<meta
						name="msapplication-config"
						content="/static/browserconfig.xml"
					/>
					<meta name="theme-color" content="#ffffff" />
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
