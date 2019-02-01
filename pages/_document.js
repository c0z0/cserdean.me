import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'

import {text} from '../utils/colors'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="Description"
            content="Cosmin Serdan JavaScript Developer & Machine Learning Enthusiast"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/favicon/safari-pinned-tab.svg"
            color="#0787ea"
          />
          <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#0787ea" />
          <meta
            name="msapplication-config"
            content="/static/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
          <style>
            {`
							body {
              margin: 0;
              font-size: 12px;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans";
							color: ${text};
							}
							`}
          </style>
          <title>Cosmin Serdean</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
