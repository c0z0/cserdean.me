import React from 'react'

import * as breakPoints from '../utils/breakPoints'

import Page from '../components/Page'

const Index = () => (
  <Page active="/" whiteMenu>
    <div>
      <div className="stripes" aria-hidden>
        <div className="stripe" />
        <div className="stripe" />
        <div className="stripe" />
        <div className="stripe" />
        <div className="stripe" />
      </div>
      <div className="content">
        <div className="text">
          <h3 className="greeting">
            Hi, I{`'`}m <span className="greeting__name">Cosmin</span>.
          </h3>
          <p className="greeting__secondary">
            JavaScript Developer & Machine Learning Enthusiast
          </p>
        </div>
        <img
          src="/static/svg/triangle-gs.svg"
          className="triangle"
          alt="triangle-logo"
        />
      </div>
    </div>
    <style jsx>{`
      .stripes {
        box-shadow: inset 0px -20px 60px -25px rgba(0, 0, 0, 0.25);
        height: 95%;
        position: absolute;
        z-index: -1;
        transform: skewY(-12deg);
        top: 0;
        transform-origin: 0;
        left: 0;
        right: 0;

        background: linear-gradient(
          45deg,
          #dd47e0 0%,
          #0787ea 50%,
          #0b69dd 100%
        );
      }

      .stripe {
        width: 33%;
        height: 15%;
        display: inline-block;
      }

      .stripe:first-child {
        background: linear-gradient(135deg, #137fef 0%, #2279e7 100%);
        width: 34%;
      }

      .stripe:nth-child(2) {
        background: linear-gradient(135deg, #137fef 0%, #5b75ef 100%);
        width: 50%;
      }

      .stripe:nth-child(3) {
        background: linear-gradient(135deg, #726fee 0%, #6f70ee 100%);
        opacity: 0;
      }

      .stripe:nth-child(4) {
        background: linear-gradient(45deg, #e12fdb 15%, #726fee 100%);
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50%;
      }

      .stripe:nth-child(5) {
        background: linear-gradient(315deg, #0082ef 0%, #8a67ed 100%);
        position: absolute;
        bottom: 0;
        right: 0;
        width: 20%;
        opacity: 0;
      }

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
        position: absolute;
        filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.1));
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
        color: white;
        margin: 3rem 0;
      }

      .content {
        margin-top: 128px;
      }

      .greeting__secondary {
        line-height: 1.2rem;
        text-align: center;

        font-size: 1rem;
        color: white;
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

        .stripe {
          height: 25%;
        }

        .stripe:nth-child(2) {
          width: 33%;
        }

        .stripe:nth-child(3) {
          opacity: 1;
        }

        .stripe:nth-child(4) {
          width: 20%;
        }

        .stripe:nth-child(5) {
          opacity: 1;
        }

        .triangle {
          display: block;
        }

        .greeting {
          white-space: nowrap;
          font-size: 4rem;
          text-align: center;
        }
      }
    `}</style>
  </Page>
)

export default Index
