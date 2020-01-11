import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const useAuth = api => {
  const router = useRouter();
  const [psychologist, storePsychologist] = useState('');

  useEffect(() => {
    api
      .get('http://localhost:2000/profile')
      .then(result => {
        if (result.status === 200) {
          storePsychologist(result.data.psychologist);
          if (result.data.psychologist.admin) {
            return router.push('/signup');
          } else {
            return router.push('/profile');
          }
        }
        return Promise.reject(result);
      })
      .catch(() => {
        router.push('/login');
      });
  }, []);
  return psychologist;
};
