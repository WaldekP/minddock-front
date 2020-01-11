import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useAuth } from '../common/hooks';
import { api, API_URL } from '../common/api';

const Profile = () => {
  const router = useRouter();
  const psychologist = useAuth(api);
  return (
    <div>
      <Head>
        <title>Home</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Nav />

      <div>
        {psychologist && (
          <h3>
            Psycholog {psychologist.name} {psychologist.surname}
          </h3>
        )}
        {psychologist && (
          <button
            onClick={() =>
              api
                .post(`http://localhost:2000/login/logout`)
                .then(() => router.push('/login'))
            }
          >
            Wyloguj
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
