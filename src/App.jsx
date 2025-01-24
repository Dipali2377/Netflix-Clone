import "./App.css";
import { Home } from "./pages/Home/Home";
import { SignUp } from "./pages/SignUp/SignUp";
import { Login } from "./pages/Login/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import "./i18n";
import { Player } from "./pages/Player/Player";

import { ToastContainer, toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <>
      <div>
        <ToastContainer theme="dark" />
        <Routes>
          {/* root route - to check if the user is authenticated? */}
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/home" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          {/* public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* protected routes */}

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
        </Routes>
      </div>
    </>
  );
}

export default App;
