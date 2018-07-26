import React from "react";

import Page from "../components/Page";

export default function Projects() {
  return (
    <Page active="/projects">
      <div className="title">Projects</div>
      <div className="subtitle">Small web development projects</div>
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
      `}</style>
    </Page>
  );
}
