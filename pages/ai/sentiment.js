import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Page from "../../components/Page";
import Input from "../../components/Input";
import * as breakPoints from "../../utils/breakPoints";
import { errorRed, sentimentColors, blue } from "../../utils/colors";

const apiRoot = "https://ai.cserdean.me";

const Content = styled.div`
  text-align: center;

  @media (${breakPoints.tabletUp}) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
  }
`;

const Title = styled.h4`
  font-weight: normal;
  font-size: 1.5em;
`;

const SrcLink = styled.a`
  color: ${blue};
  text-decoration: none;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace, serif;
`;

const Loading = styled.p`
  opacity: 0.2;
  font-size: 16px;
`;

const Error = styled.p`
  color: ${errorRed};
  margin-top: 16px;
  margin-bottom: 32px;
`;

const Scale = styled.div`
  margin: 0 auto;
  position: relative;
  height: 2px;
  width: 300px;
  background: linear-gradient(to right, ${sentimentColors.join(",")});
`;

const ScaleIndicator = styled.span`
  position: absolute;
  top: -5px;
  bottom: -5px;
  background: white;
  width: 2px;
  left: ${({ prediction }) => (prediction ? (prediction / 4) * 300 : 150)}px;
  transition: all 0.5s;
`;

export default function Sentiment() {
  const [initializingState, setInitializing] = useState(true);
  const [errorState, setError] = useState();
  const [text, setText] = useState("");
  const [prediction, setPrediction] = useState();
  const [predictionLoading, setPredictionLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${apiRoot}/ping`);

        if (res.ok) {
          return setInitializing(false);
        }
        setInitializing(false);
        return setError(true);
      } catch (e) {
        setInitializing(false);
        return setError(true);
      }
    })();
  }, []);

  async function predict({ target: { value } }) {
    if (value.length === 0) {
      setText(value);
      return setPrediction(undefined);
    }

    try {
      setPredictionLoading(true);
      setText(value);
      const res = await fetch(`${apiRoot}/sentiment`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text: value
        })
      });

      if (res.ok) {
        const data = await res.json();
        setPrediction(data.prediction);
        return setPredictionLoading(false);
      }

      setPredictionLoading(true);
      return setError(true);
    } catch (e) {
      setPredictionLoading(true);
      return setError(true);
    }
  }

  return (
    <Page active="/ai" dark>
      <Content>
        <Title>
          Sentiment classifier trained on movie reviews{" "}
          <SrcLink href="https://github.com/c0z0/sentiment-classifier">
            [src]
          </SrcLink>
        </Title>
        {initializingState && <Loading>Loading...</Loading>}
        {errorState && <Error>Something went wrong</Error>}
        {!(errorState || initializingState) && (
          <Input
            loading={predictionLoading}
            text={text}
            onClear={() => {
              setText("");
              setPrediction(undefined);
            }}
            onChange={predict}
          />
        )}
        <Scale>
          <ScaleIndicator prediction={prediction} />
        </Scale>
      </Content>
    </Page>
  );
}
