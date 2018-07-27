import React from "react";
import PropTypes from "prop-types";

import Menu from "./Menu";
import * as breakPoints from "../utils/breakPoints";

export default function Projects({ children, active, fullHeight, dark }) {
  return (
    <div className="container">
      <Menu active={active} />
      {fullHeight ? children : <div className="content">{children}</div>}
      <style jsx>{`
        .container {
          font-size: 12px;
          color: #484848;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans";
          max-width: 900px;
          margin: 0 auto;

          ${fullHeight &&
            "min-height: calc(100vh - 40px); display: flex; flex-direction: column;"};
        }

        .content {
          margin: 80px 0;
        }

        @media (${breakPoints.phoneOnly}) {
          .content {
            margin: 0 20px;
          }
        }
      `}</style>
      <style jsx global>{`
        body {
          background: ${dark ? "black" : "none"};
        }
      `}</style>
    </div>
  );
}

Projects.defaultProps = {
  fullHeight: false,
  dark: false
};

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.string.isRequired,
  fullHeight: PropTypes.bool,
  dark: PropTypes.bool
};
