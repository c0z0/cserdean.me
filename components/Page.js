import React from "react";

import Menu from "./Menu";

export default function Projects({ children, active, fullHeight }) {
  return (
    <div className="container">
      <Menu active={active} />
      {children}
      <style jsx>{`
        .container {
          font-size: 12px;
          color: #484848;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans";
          max-width: 900px;
          margin: 0 auto;
          padding: 20px;

          ${fullHeight &&
            "min-height: calc(100vh - 40px); display: flex; flex-direction: column;"};
        }
      `}</style>
    </div>
  );
}
