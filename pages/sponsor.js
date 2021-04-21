import React from 'react';
import Page from '../components/Page';
import Meta from '../components/meta';

export default function SponsorPage() {
  return (
    <Page>
      <Meta staticPage={{ title: 'Sponsors' }} />
      <div className="wrapper wrapper--text">
        <h2>Episode Sponsorship</h2>
        <p>
          Please{' '}
          <a href="mailto:elliot@elliotmorris.dev,tomfrance26@gmail.com">
            send us an email
          </a>{' '}
          if you are interested in working together and sponsoring the podcast.
        </p>
      </div>
    </Page>
  );
}
