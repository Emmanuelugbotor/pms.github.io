import React from 'react';
import logo from './logo.svg';
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter, Routes,Route } from "react-router-dom";
import './App.css';
import Register from './modules/onboarding/users/register';
import PasswordSetUp from './modules/onboarding/users/passwordsetup';
import SecurityQuestions from './modules/onboarding/users/securityQuestions';
import Login from './modules/onboarding/users/login';
import ForgetPassword from './modules/onboarding/users/forgetPassword';
import ResetPasswordLogin from './modules/onboarding/users/ResetPasswordLogin';
import ResetPassword from './modules/onboarding/users/ResetPassword';
import AdminRegister from './modules/onboarding/admin/adminRegister';
import AdminLogin from './modules/onboarding/admin/adminLogin';
import Dashboard from './modules/dashboard/admin/dashboard';
import UserDashboard from './modules/dashboard/users/dashboard';
import Settings from './modules/dashboard/admin/settings';




function App() {
  return (
    
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/"  element={<Register />} />
      <Route path="/passwordsetup" element={<PasswordSetUp />} />
      <Route path="/securityquestions" element={<SecurityQuestions />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/admin/register" element={<AdminRegister />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/settings/*" element={<Settings />} />
      <Route path="/admin_login" element={<AdminLogin />} />
      <Route path="/reset_password" element={<ResetPassword />} />
      <Route path="/reset_password_login" element={<ResetPasswordLogin />} />
      <Route path="/userdashboard" element={<UserDashboard />} />
    </Routes>
    </BrowserRouter> 


  );
}

export default App;
