import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import fetch from 'isomorphic-unfetch';
import { getAppUrl } from '../common/api';
import PropTypes from 'prop-types';

// const Home = ( ) => {
const Home = ( ) => {
// const Home = ({ psychologists }) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Nav />

      <div className="hero">
        <h1 className="example">Witaj na MindDock</h1>
        <h3>
          Tutaj znajdziesz listę najlepszych psychologów dostępnych na
          platformie
        </h3>
        <ul>
          {/*{psychologists.map(psychologist => (*/}
          {/*  <li>*/}
          {/*    {psychologist.name} {psychologist.surname}*/}
          {/*  </li>*/}
          {/*))}*/}
        </ul>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  );
};
Home.propTypes = {
  psychologists: PropTypes.array,
};

// Home.getInitialProps = async ({ req }) => {
//   const psychologistsList = await fetch(
//     `${getAppUrl(req) || ''}/api/psychologists`
//   );
//   return {
//     psychologists: await psychologistsList.json(),
//   };
// };

export default Home;
