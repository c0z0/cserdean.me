import React from 'react'

import Page from '../components/Page'
import * as colors from '../utils/colors'

export default function Projects() {
  return (
    <Page active="/projects">
      <h3 className="title">Projects</h3>
      <p className="subtitle">Small web development projects</p>
      <div className="experiments">
        <p className="experiment">
          <a className="experiment__anchor" href="https://s.cserdean.me">
            SHRT - URL shortening app built with Go and Next.js
          </a>
          <a
            className="experiment__src"
            href="https://github.com/c0z0/lambda-shrt">
            [src]
          </a>
        </p>

        <p className="experiment">
          <a className="experiment__anchor" href="https://s.cserdean.me/t">
            Transfer - Tiny file sharing app built with Go and Next.js
          </a>
          <a
            className="experiment__src"
            href="https://github.com/c0z0/lambda-shrt">
            [src]
          </a>
        </p>
      </div>
      <style jsx>{`
        .title {
          font-size: 2.5em;
          margin-bottom: 12px;
          font-weight: 400;
        }

        .experiments {
          border-top: 1px #eee solid;
        }

        .experiment {
          font-size: 1.5em;
          font-weight: 400;
          padding: 24px 0;
        }

        .experiment__src {
          color: ${colors.blue};
          float: right;
          text-decoration: none;
        }

        .experiment__anchor {
          color: ${colors.blue};
          text-decoration: none;
        }

        .subtitle {
          color: #888;
          margin-bottom: 30px;
          font-size: 1.5em;
        }
      `}</style>
    </Page>
  )
}
