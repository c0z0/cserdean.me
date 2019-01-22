import React from 'react'
import Link from 'next/link'

import Page from '../../components/Page'
import * as colors from '../../utils/colors'

const Ai = () => (
  <Page active="/ai" dark>
    <h3 className="title">AI Experiments</h3>
    <p className="subtitle">Tiny Machine Learning demos</p>
    <div className="experiments">
      <p className="experiment">
        <Link href="/ai/sentiment" prefetch>
          <a className="experiment__anchor" href="/ai/sentiment">
            Sentiment classifier trained on movie reviews
          </a>
        </Link>
        <a
          className="experiment__src"
          href="https://github.com/c0z0/sentiment-classifier">
          [src]
        </a>
      </p>
      {/* <div className="experiment">
        <a className="experiment__anchor" href="/ai/sentiment">
          Neural English to German translation
        </a>
      </div> */}
    </div>
    <style jsx>{`
      .experiment__src {
        color: ${colors.blue};
        float: right;
        text-decoration: none;
      }

      .title {
        font-size: 2.5em;
        margin-bottom: 12px;
        font-weight: 400;
      }

      .subtitle {
        color: #888;
        font-size: 1.5em;
        margin-bottom: 30px;
      }

      .experiments {
        border-top: 1px #222 solid;
      }

      .experiment {
        font-size: 1.5em;
        font-weight: 400;
        padding: 24px 0;
      }

      .experiment__anchor {
        color: ${colors.blue};
        text-decoration: none;
      }
    `}</style>
  </Page>
)

export default Ai
