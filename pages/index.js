import React from "react";

import { blue } from "../utils/colors";
import * as breakPoints from "../utils/breakPoints";

import Page from "../components/Page";

const Index = () => (
  <Page active="/">
    <div className="content">
      <div className="text">
        <h3 className="greeting">
          Hi, I{`'`}m <span className="greeting__name">Cosmin</span>.
        </h3>
        <p className="greeting__secondary">
          {" "}
          JavaScript Developer & Machine Learning Enthusiast
        </p>
      </div>
      <img src="/static/triangle.svg" className="triangle" alt="" />
    </div>
    <style jsx>{`
      @keyframes hover {
        0,
        100% {
          transform: rotate(10deg) translateX(10%);
        }
        50% {
          transform: rotate(5deg) translate(11%, -10%);
        }
      }

      .triangle {
        height: 450px;
        position: fixed;
        left: 110%;
        top: -50%;
        display: none;
        transform: rotate(10deg) translateX(10%);
        animation: hover 20s infinite ease-in-out;
      }

      .greeting {
        font-weight: 300;
        font-size: 3rem;
        text-align: center;
        color: #484848;
        margin: 3rem 0;
      }

      .greeting__name {
        color: ${blue};
      }

      .content {
        margin-top: 30vh;
      }

      .greeting__secondary {
        line-height: 1.2rem;
        text-align: center;

        font-size: 1rem;
        color: #888;
      }

      @media (${breakPoints.tabletUp}) {
        .content {
          margin: 0;
          position: absolute;
          top: 50%;
          left: calc(100vh - 900) / 2;
          transform: translateY(-50%);
          display: flex;
          flex-direction: row;
        }

        .triangle {
          display: block;
        }

        .greeting {
          white-space: nowrap;
          font-size: 4rem;
          text-align: center;
        }

        .content__wrapper {
          justify-content: flex-start;
        }
      }
    `}</style>
  </Page>
);

export default Index;
