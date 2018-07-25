import React from 'react';

import Menu from '../components/Menu';

export default function Projects() {
  return (
    <div className="container">
      <style jsx global>{`
        body {
          background: black;
        }
      `}</style>
      <Menu active="/projects" />
      <div className="content">
        <div className="title">Projects</div>
        <div className="subtitle">Small web development projects</div>
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
      `}</style>
    </div>
  );
}
