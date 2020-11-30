import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

import { signOut } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP 
      </Link>
      <Link className='option' to='/shop'>
        CONTACT 
      </Link>
      { currentUser && (
        <div className='option' onClick={() => signOut()}>SIGN OUT</div>
      )}
      { !currentUser && (
        <Link className='option' to='/sign-in'>
          SIGN IN 
        </Link>
      )}
    </div>
  </div>
);

export default Header;