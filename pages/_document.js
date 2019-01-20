import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

import { text as themeColor, text } from "../utils/colors";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-86522507-2"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-86522507-2');`
            }}
          />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content={themeColor} />
          <meta
            name="Description"
            content="Cosmin Serdan JavaScript Developer & Machine Learning Enthusiast"
          />
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
    );
  }
}
