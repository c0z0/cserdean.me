import Document, { Head, Main, NextScript } from 'next/document'

const favicon = Math.random() > 0.5 ? 'blue' : 'pink'

export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
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
					<style>{`body { margin: 0 } /* custom! */`}</style>
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
