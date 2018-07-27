import React from "react";

import { blue } from "../utils/colors";
import * as breakPoints from "../utils/breakPoints";

import Page from "../components/Page";

const Index = () => (
  <Page active="/" fullHeight>
    <div className="content__wrapper">
      <div className="content">
        <h3 className="greeting">
          Hi, I{`'`}m <span className="greeting__name">Cosmin</span>.
          <span className="greeting__secondary">
            <br />
            JavaScript Developer & Machine Learning Enthusiast
          </span>
        </h3>
        <img src="/static/triangle.svg" className="triangle" alt="" />
      </div>
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
        height: 50vh;
        transform: rotate(10deg) translateX(10%);
        position: fixed;
        top: 30%;
        left: 45%;
        z-index: -1;
        overflow: hidden;
        animation: hover 20s infinite ease-in-out;
        display: none;
      }

      .content {
        position: relative;
      }

      .greeting {
        white-space: nowrap;
        font-weight: 300;
        font-size: 3rem;
        text-align: center;
        color: #484848;
      }

      .greeting__name {
        color: ${blue};
      }

      .content__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        flex: 1;
      }

      @media (${breakPoints.tabletUp}) {
        .triangle {
          display: block;
        }

        .greeting {
          font-size: 4rem;
          text-align: center;
        }

        .content__wrapper {
          justify-content: flex-start;
        }
      }

      .greeting__secondary {
        line-height: 1rem;

        font-size: 1rem;
        color: #888;
      }
    `}</style>
  </Page>
);

export default Index;
