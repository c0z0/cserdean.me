import React from "react";
import Link from "next/link";
import styled from "styled-components";

import Page from "../../components/Page";
import ServiceStatus from "../../components/ServiceStatus";
import { Experiment, Title, Subtitle } from "../projects";

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Ai = () => (
  <Page active="/ai" dark>
    <TitleWrapper>
      <Title dark>AI Experiments</Title>
      <ServiceStatus />
    </TitleWrapper>
    <Subtitle>Tiny Machine Learning demos</Subtitle>
    <Experiment.List dark>
      <Experiment>
        <Link href="/ai/sentiment" prefetch passHref>
          <Experiment.Link>
            Sentiment classifier trained on movie reviews
          </Experiment.Link>
        </Link>
        <Experiment.Src href="https://github.com/c0z0/sentiment-classifier">
          [src]
        </Experiment.Src>
      </Experiment>
      {/* <div className="experiment">
        <a className="experiment__anchor" href="/ai/sentiment">
          Neural English to German translation
        </a>
      </div> */}
    </Experiment.List>
  </Page>
);

export default Ai;
