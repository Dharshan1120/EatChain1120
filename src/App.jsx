import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/auth/signup";
import Login from "./components/auth/login";
import Home from "/pages/Home";
import RequireAuth from "./components/auth/RequireAuth"; // ✅ your auth wrapper

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* ✅ Protected route */}
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
