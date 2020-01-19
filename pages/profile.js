import React from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../common/hooks';
import { api } from '../common/api';
import Layout from '../components/layout';

const Profile = () => {
  const router = useRouter();
  const psychologist = useAuth(api);
  return (
    <Layout title="Twój psycholog-profil psychologa">
      <div>
        {psychologist && (
          <h3>
            Psycholog {psychologist.name} {psychologist.surname}
          </h3>
        )}
        {psychologist && (
          <button
            onClick={() =>
              api.post(`/api/login/logout`).then(() => router.push('/login'))
            }
          >
            Wyloguj
          </button>
        )}
      </div>
    </Layout>
  );
};

export default Profile;
