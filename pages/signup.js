import React, { useReducer } from 'react';
import axios from 'axios';
import { inputReducer } from '../common/reducers';
import { handleInput } from '../common/utils';
import { useAuth } from '../common/hooks';
import { useRouter } from 'next/router';
import Layout from '../components/layout';

const Signup = () => {
  const api = axios.create({
    withCredentials: true,
  });

  const [data, dispatch] = useReducer(inputReducer, {
    name: '',
    surname: '',
    email: '',
    password: '',
  });

  const router = useRouter();

  useAuth(api);

  return (
    <Layout title="Twój psycholog-dodaj psychologa">
      <h3>Dodaj psychologa</h3>
      <div>
        <label>
          <input
            name="name"
            onChange={e => handleInput(e, dispatch)}
            value={data.name}
          />
          Imie
        </label>
        <label>
          <input
            name="surname"
            onChange={e => handleInput(e, dispatch)}
            value={data.surname}
          />
          Surname
        </label>
        <label>
          <input
            name="email"
            onChange={e => handleInput(e, dispatch)}
            value={data.email}
          />
          Email
        </label>
        <label>
          <input
            name="password"
            onChange={e => handleInput(e, dispatch)}
            value={data.password}
          />
          Password
        </label>
        <button
          onClick={() =>
            api({
              method: 'POST',
              url: '/api/psychologists',
              headers: { 'Content-Type': 'application/json;charset=UTF-8' },
              data,
            }).then(result => {
              console.log('result', result);
            })
          }
        >
          Dodaj psychologa
        </button>
      </div>
      <button
        onClick={() =>
          api
            .post('http://localhost:2000/login/logout')
            .then(() => router.push('/login'))
        }
      >
        Wyloguj
      </button>
    </Layout>
  );
};

export default Signup;
