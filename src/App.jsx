import "./App.css";
import { Home } from "./pages/Home/Home";
import { SignUp } from "./pages/SignUp/SignUp";
import { Login } from "./pages/Login/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import "./i18n";
import { Player } from "./pages/Player/Player";

import { ToastContainer } from "react-toastify";
import PropTypes from "prop-types"; // For prop-types validation

// Utility function to check authentication
const isAuthenticated = () => {
  return JSON.parse(localStorage.getItem("isAuthenticated") || "false");
};

// ProtectedRoute Component
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  return children;
};

// Define prop-types for ProtectedRoute
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  return (
    <>
      <div>
        <ToastContainer theme="dark" />
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected Routes */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/player/:id"
            element={
              <ProtectedRoute>
                <Player />
              </ProtectedRoute>
            }
          />

          {/* Root Route */}
          <Route
            path="/"
            element={
              isAuthenticated() ? (
                <Navigate to="/home" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
