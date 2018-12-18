import React from "react";

import Page from "../../components/Page";
import * as colors from "../../utils/colors";

const Ai = () => (
  <Page active="/ai" dark>
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
    <style jsx>{`
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
);

export default Ai;
