import React, { useReducer} from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import { useRouter } from 'next/router';
import { inputReducer } from '../common/reducers';
import { handleInput } from '../common/utils';
import { useAuth } from '../common/hooks';
import { api } from '../common/api';

const Login = () => {
  const router = useRouter();

  const [data, dispatch] = useReducer(inputReducer, {
    email: '',
    password: '',
  });

  useAuth(api);

  return (
    <div>
      <Head>
        <title>Home</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Nav />

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
    </div>
  );
};

export default Login;
