import { createContext, useState } from "react";

const AuthenticationContext = createContext();

function AuthenticationProvider(props) {
  const [authentication, setAuthentication] = useState(false);

  function login() {
    setAuthentication(true);
  }

  function logout() {
    setAuthentication(false);
  }

  const value = {
    authentication,
    login,
    logout,
  };

  return (
    <AuthenticationContext.Provider value={value}>
      {props.children}
    </AuthenticationContext.Provider>
  );
}

export { AuthenticationContext, AuthenticationProvider };
