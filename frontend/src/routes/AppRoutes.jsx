// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import UserEvents from "../pages/UserEvents";

export default function AppRoutes() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/events" element={user ? <UserEvents /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/events" />} />
    </Routes>
  );
}
