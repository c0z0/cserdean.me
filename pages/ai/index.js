import React from 'react';
import Link from 'next/link';

import Page from '../../components/Page';
import ServiceStatus from '../../components/ServiceStatus';
import { Experiment, Title, Subtitle } from '../projects';

const Ai = () => (
  <Page active="/ai">
    <Title>
      <span>AI Experiments</span>
      <ServiceStatus />
    </Title>
    <Subtitle>Tiny Machine Learning demos</Subtitle>
    <Experiment.List dark>
      <Experiment>
        <Link href="/ai/sentiment" passHref>
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
