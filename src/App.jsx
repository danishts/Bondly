import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Pages/Dashboard";
import Sidebar from "./Components/Sidebar";
import Mobilebar from "./Components/Mobilebar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <div className="flex">
              <Sidebar />
              <Dashboard />
            </div>
          }
        />
        <Route path="/mobilebar" element={<Mobilebar />} />
      </Routes>
    </Router>
  );
};

export default App;
