import React from 'react';
import Layout from '../components/layout';
import landingStyles from '../styles/pages/landing/landing.scss';

const Home = () => {
  return (
    <Layout title="Twój psycholog">
      <div className={landingStyles.container}>
        <h1 className={landingStyles.title}>Twój psycholog</h1>
        <h3>Znajdź psychoterapeute dla siebie</h3>
        <div className={landingStyles.grid}>
          <div>A</div>
          <div>C</div>
          <div>D</div>
          <div>D</div>
          <div>D</div>
          <div>D</div>
          <div>D</div>
          <div>D</div>
          <div>D</div>
          <div>D</div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
