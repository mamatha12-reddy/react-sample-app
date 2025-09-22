import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = (props) => {
  console.log("childers===",props.children)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };

/*
 <AuthProvider>
      <h1>Hello User</h1>
  <NavBar/>
  </AuthProvider>
*/