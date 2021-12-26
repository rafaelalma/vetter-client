import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import { AuthenticationProvider } from "./context/authentication/AuthenticationContext";
import LoginPage from "./views/Login/LoginPage";
import SignUpPage from "./views/SignUp/SignUpPage";

export default function App() {
  return (
    <div className="App">
      <AuthenticationProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={null} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={null} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/dashboard" element={null} />
            <Route path="/medicines" element={null} />
          </Routes>
        </BrowserRouter>
      </AuthenticationProvider>
    </div>
  );
}
