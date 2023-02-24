import React from 'react';
import UserMenu from './UserMenu';

const Header = ({ currentUser, onLogout }) => (
  <header className='Header'>
    <h2>MiniMail</h2>
    <UserMenu currentUser={currentUser} onLogout={onLogout} />
  </header>
);

export default Header;
