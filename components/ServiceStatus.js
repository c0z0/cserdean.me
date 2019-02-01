import React, { useState, useEffect } from "react";
import styled from "styled-components";

const apiRoot = "https://ai.cserdean.me";

const Ball = styled.div.attrs({ title: "AI Service Status" })`
  transition: all 0.2s linear;
  width: 10px;
  height: 10px;
  background: ${({ green }) => (green ? "#5ff441" : "#f4d142")};
  display: inline-block;
  border-radius: 100%;
`;

export default function ServiceStatus() {
  const [status, setStatus] = useState("init");

  useEffect(() => {
    (async () => {
      const res = await fetch(`${apiRoot}/ping`);
      if (res.ok) {
        setStatus("ready");
      }
    })();
  }, []);

  return <Ball green={status === "ready"} />;
}
