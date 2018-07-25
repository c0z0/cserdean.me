import React from 'react';

import Menu from '../../components/Menu';
import * as colors from '../../utils/colors';

const Ai = () => (
  <div className="container">
    <Menu active="/ai" />
    <div className="content">
      <h3 className="title">AI Experiments</h3>
      <p className="subtitle">Tiny Machine Learning demos</p>
      <div className="experiments">
        <div className="experiment">
          <a className="experiment__anchor" href="/ai/sentiment">
            Sentiment classifier trained on movie reviews
          </a>
        </div>
        <div className="experiment">
          <a className="experiment__anchor" href="/ai/sentiment">
            Neural English to German translation
          </a>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        font-size: 12px;
        color: #484848;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
          'Fira Sans';
      }

      .content {
        max-width: 900px;
        margin: 32px auto;
      }

      .title {
        font-size: 2.5em;
        margin-bottom: 12px;
        font-weight: 400;
      }

      .subtitle {
        color: #888;
        margin-bottom: 30px;
      }

      .experiments {
        border-top: 1px #ddd solid;
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
  </div>
);

export default Ai;
