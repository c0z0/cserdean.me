import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
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
					<title>Cosmin Serdean</title>
					<style>{`body { margin: 0 } /* custom! */`}</style>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}
