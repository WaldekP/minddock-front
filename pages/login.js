import React, { useReducer} from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import axios from 'axios';
import { useRouter } from 'next/router';
import { inputReducer } from '../common/reducers';
import { handleInput } from '../common/utils';
import { useAuth } from '../common/hooks';

const Login = () => {
  const router = useRouter();

  const api = axios.create({
    withCredentials: true,
  });

  const [data, dispatch] = useReducer(inputReducer, {
    email: '',
    password: '',
  });

  // useEffect(() => {
  //   axios.get('http://localhost:2000/getcsrftoken').then(
  //     response => {
  //       axios.defaults.headers.common['X-CSRF-TOKEN'] = console.log('response.data.csrfToken', response.data.csrfToken) || response.data.csrfToken;
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }, []);

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
            api.post(`http://localhost:2000/login`, data).then(() => {
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
