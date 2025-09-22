import React, { useContext } from 'react';
import { AuthContext,AuthProvider } from './AuthContext';

const NavBar = () => {
  const {  isLoggedIn, login, logout} = useContext(AuthContext);
console.log("navbar")
  return (
    <>
    <h1>hello</h1>
    <nav>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </nav>
    </>
  );
};

export default NavBar;