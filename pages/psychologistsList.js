import React from 'react';
import fetch from 'isomorphic-unfetch';
import { getAppUrl } from '../common/api';
import PropTypes from 'prop-types';
import mainPageStyles from '../styles/pages/landing/landing.scss';
import Layout from '../components/layout';

const PsychologistsList = ({ psychologists }) => {
  return (
    <Layout title="Twój psycholog - znajdź psychologa">
      <div>
        <h1 className={mainPageStyles.title}>Lista psychologów</h1>
        <h3>Dopasuj psychologa dla siebie</h3>
        <ul>
          {psychologists.map(psychologist => (
            <li>
              {psychologist.name} {psychologist.surname}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

PsychologistsList.propTypes = {
  psychologists: PropTypes.array,
};

PsychologistsList.getInitialProps = async ({ req }) => {
  const psychologistsList = await fetch(
    `${getAppUrl(req) || ''}/api/psychologists`
  );
  return {
    psychologists: await psychologistsList.json(),
  };
};

export default PsychologistsList;
