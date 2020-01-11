const nextRoutes = require('next-routes');
const routes = (module.exports = nextRoutes());

routes.add({
  name: '/',
  pattern: '/',
  page: '/',
});

routes.add({
  name: 'lista-psychologow',
  pattern: '/lista-psychologow',
  page: '/psychologistsList',
});

routes.add({
  name: 'logowanie',
  pattern: '/logowanie',
  page: 'login',
});

routes.add({
  name: 'dodaj-psychologa',
  pattern: '/dodaj-psychologa',
  page: 'signup',
});

routes.add({
  name: 'profil-psychologa',
  pattern: '/profil-psychologa',
  page: 'profile',
});
