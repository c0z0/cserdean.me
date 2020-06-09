import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { GoogleAnalytics, Hotjar } from '../utils/analytics';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [...initialProps.styles, ...sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `(function() {
    try {
      var mode = localStorage.getItem('THEME');
      var supportDarkMode =
        window.matchMedia('(prefers-color-scheme: dark)').matches === true;
      if (!mode) {
        document.documentElement.classList.add(supportDarkMode ? 'dark-theme': 'light-theme');
      }
      document.documentElement.classList.add(mode + '-theme');
    } catch (e) {}
  })();`,
            }}
          />
          {/* <GoogleAnalytics />
          <Hotjar /> */}
          <meta property="og:title" content="Cosmin Serdean" />
          <meta
            property="og:description"
            content="JavaScript Developer
& Machine Learning Enthusiast"
          />
          <meta property="og:url" content="https://cserdean.com" />
          <meta
            property="og:image"
            content="https://cserdean.com/static/avatar.jpg"
          />
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
