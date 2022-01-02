import Header from "components/Header/Header";
import { AuthenticationProvider } from "context/authentication/AuthenticationContext";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "views/Dashboard/DashboardPage";
import NewOwnerForm from "views/Dashboard/Owners/NewOwnerForm/NewOwnerForm";
import OwnerDetailsPage from "views/Dashboard/Owners/OwnerDetails/OwnerDetailsPage";
import OwnersList from "views/Dashboard/Owners/OwnersList/OwnersList";
import OwnersPage from "views/Dashboard/Owners/OwnersPage";
import NewPatientForm from "views/Dashboard/Patients/NewPatientForm/NewPatientForm";
import PatientDetailsPage from "views/Dashboard/Patients/PatientDetails/PatientDetailsPage";
import PatientsList from "views/Dashboard/Patients/PatientsList/PatientsList";
import PatientsPage from "views/Dashboard/Patients/PatientsPage";
import SummaryPage from "views/Dashboard/Summary/SummaryPage";
import ForgotPasswordPage from "views/ForgotPassword/ForgotPasswordPage";
import HomePage from "views/Home/HomePage";
import LoginPage from "views/Login/LoginPage";
import MedicinesPage from "views/Medicines/MedicinesPage";
import SearchForm from "views/Medicines/SearchForm/SearchForm";
import NotFoundPage from "views/NotFound/NotFoundPage";
import SignUpPage from "views/SignUp/SignUpPage";
import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <AuthenticationProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/dashboard" element={<DashboardPage />}>
              <Route index element={<SummaryPage />} />
              <Route path="patients" element={<PatientsPage />}>
                <Route index element={<PatientsList />} />
                <Route path="new" element={<NewPatientForm />} />
                <Route path=":id" element={<PatientDetailsPage />} />
              </Route>
              <Route path="owners" element={<OwnersPage />}>
                <Route index element={<OwnersList />} />
                <Route path="new" element={<NewOwnerForm />} />
                <Route path=":id" element={<OwnerDetailsPage />} />
              </Route>
            </Route>
            <Route path="/medicines" element={<MedicinesPage />}>
              <Route index element={null} />
              <Route path="saved" element={null} />
              <Route path="categories" element={null} />
              <Route path="search" element={<SearchForm />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </AuthenticationProvider>
    </div>
  );
}
