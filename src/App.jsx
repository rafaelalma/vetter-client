import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { AuthenticationProvider } from "./context/authentication/AuthenticationContext";

export default function App() {
  return (
    <div className="App">
      <AuthenticationProvider>
        <Header />
      </AuthenticationProvider>
    </div>
  );
}
