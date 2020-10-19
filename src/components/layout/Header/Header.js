import React from 'react';
import styles from './Header.scss';
import {Link} from 'react-router-dom';
import logo from '../../../assets/logo.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt='SharPhoto logo' className={styles.logo} />
      </div>
      <nav>
        <ul>
          <div>
            <li>
              <Link to='/'>Strona Główna</Link>
            </li>
            <li>
              <Link to='/about'>O nas</Link>
            </li>
            <li>
              <Link to='/usertype'>Zdjęcia</Link>
            </li>
          </div>
          <div>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/cart'>Koszyk</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
