import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Login/loginPage";
import Register from "./components/Register/registerPage";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/Sidebar/MainContent";


const App = () => {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Routes>
            <Route path="/sidebar" element={<Sidebar />} />
          </Routes>
        </Router>
        <div>
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default App;
