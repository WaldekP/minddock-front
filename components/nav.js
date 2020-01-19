import React from 'react';
import Link from 'next/link';
import navStyles from '../styles/common/nav.scss';

const Nav = () => (
  <div className={navStyles.container}>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/lista-psychologow">
          <a>Lista psychologów</a>
        </Link>
      </li>
      <li>
        <Link href="/login">
          <a>Strefa psychologa</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Nav;
