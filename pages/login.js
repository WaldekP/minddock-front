import React, { useReducer } from 'react';
import { useRouter } from 'next/router';
import { inputReducer } from '../common/reducers';
import { handleInput } from '../common/utils';
import { useAuth } from '../common/hooks';
import { api } from '../common/api';
import Layout from '../components/layout';

const Login = () => {
  const router = useRouter();

  const [data, dispatch] = useReducer(inputReducer, {
    email: '',
    password: '',
  });

  useAuth(api);

  return (
    <Layout title="Twój psycholog-logowanie">
      <div>
        <input
          name="email"
          onChange={e => handleInput(e, dispatch)}
          value={data.email}
        />
        <input
          name="password"
          onChange={e => handleInput(e, dispatch)}
          value={data.password}
        />
        <button
          onClick={() => {
            api.post(`/api/login`, data).then(() => {
              router.push('/profile');
            });
          }}
        >
          Zaloguj sie
        </button>
      </div>
    </Layout>
  );
};

export default Login;
