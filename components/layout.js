import Nav from './nav';
import Footer from './footer';
import React from 'react';
import layoutStyles from '../styles/base/layout.scss';
import Head from 'next/head';

const Layout = ({ children, title }) => (
  <div className={layoutStyles.container}>
    <Head>
      <title>{title}</title>
      <link href="/favicon.ico" rel="icon" />
    </Head>
    <Nav />
    <div className={layoutStyles.children}>{children}</div>
    <Footer />
  </div>
);

export default Layout;
