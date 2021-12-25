import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import { AuthenticationProvider } from "./context/authentication/AuthenticationContext";
import SignUpPage from "./views/SignUp/SignUpPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthenticationProvider>
          <Header />
        </AuthenticationProvider>
        <Routes>
          <Route path="/" element={null} />
          <Route path="/login" element={null} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
