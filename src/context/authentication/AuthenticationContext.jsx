import { useState, createContext } from "react";

const AuthenticationContext = createContext();

function AuthenticationProvider(props) {
  const [authentication, setAuthentication] = useState(false);

  function authenticate() {
    setAuthentication(true);
  }

  const value = {
    authentication,
    authenticate,
  };

  return (
    <AuthenticationContext.Provider value={value}>
      {props.children}
    </AuthenticationContext.Provider>
  );
}

export { AuthenticationContext, AuthenticationProvider };
