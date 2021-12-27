import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import { AuthenticationProvider } from "./context/authentication/AuthenticationContext";
import DashboardPage from "./views/Dashboard/DashboardPage";
import PatientsList from "./views/Dashboard/Patients/PatientsList/PatientsList";
import ForgotPasswordPage from "./views/ForgotPassword/ForgotPasswordPage";
import LoginPage from "./views/Login/LoginPage";
import MedicinesPage from "./views/Medicines/MedicinesPage";
import SearchForm from "./views/Medicines/SearchForm/SearchForm";
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
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/dashboard" element={<DashboardPage />}>
              <Route index element={null} />
              <Route path="patients" element={<PatientsList />}>
                <Route path=":id" element={null} />
              </Route>
              <Route path="owners" element={null} />
            </Route>
            <Route path="/medicines" element={<MedicinesPage />}>
              <Route index element={null} />
              <Route path="saved" element={null} />
              <Route path="categories" element={null} />
              <Route path="search" element={<SearchForm />} />
            </Route>
            <Route path="*" element={null} />
          </Routes>
        </BrowserRouter>
      </AuthenticationProvider>
    </div>
  );
}
