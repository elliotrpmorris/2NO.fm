import React from 'react';
import Page from '../components/Page';
import Meta from '../components/meta';

export default function AboutPage() {
  return (
    <Page>
      <Meta staticPage={{ title: 'About' }} />
      <div className="wrapper wrapper--text">
        <h2>What is 2NO?</h2>
        <p>
            Welcome to 2NO the podcast that wants you 2NO everything. 
            Here you will find all there is 2NO on the world we live in, the things you may have forgotten about, the things you decided to ignore at school, 
            or just things that have never become apparent in your life. Through weekly podcasts you can delve into new fields of knowledge and paradigms to further expand your mind; as the famous saying goes, knowledge is power. 
        </p>
        <h2>Our Promise</h2>
        <p>
          Here at 2NO, our mission is to inform the masses through engaging content that will leave you wanting 2NO more. 
          This means that any content published has been fact-checked before publication. Due to our own personal experiences within specific fields, it is important to understand that these do not reflect any ideas of truth and are rather just subjective recounts. 
          Please do not be offended if your opinion clashes with ours, we ask politely that you join our community to discuss with us and our audience your ideas and beliefs on any given topic. 
        </p>
      </div>
    </Page>
  );
}
