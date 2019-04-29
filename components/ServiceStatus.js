import React, { useState, useEffect } from "react";
import styled from "styled-components";

const apiRoot = "https://ai.cserdean.com";

const Ball = styled.div.attrs({ title: "AI Service Status" })`
  transition: all 0.2s linear;
  width: 10px;
  height: 10px;
  background: ${({ status }) =>
    status === "ready" ? "#5ff441" : status === "init" ? "#f4d142" : "#ff001f"};
  display: inline-block;
  border-radius: 100%;
`;

export default function ServiceStatus() {
  const [status, setStatus] = useState("init");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${apiRoot}/ping`);
        if (res.ok) setStatus("ready");
        else setStatus("error");
      } catch (err) {
        setStatus("error");
      }
    })();
  }, []);

  return <Ball status={status} />;
}
