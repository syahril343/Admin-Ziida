import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Auth/loginPage";
import Register from "./pages/Auth/registerPage";
import Header from "./pages/Dashboard/Content/Header";
import Sidebar from "./pages/Dashboard/Sidebar";
import Table from "./pages/Dashboard/Content/Table";

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route
              index
              element={
                <>
                  <Login />
                </>
              }
            />
            <Route
              path="/register"
              element={
                <>
                  <Register />
                </>
              }
            />
            <Route
              path="/header"
              element={
                <>
                  <Header />
                </>
              }
            />
            <Route
              path="/sidebar"
              element={
                <>
                  <Sidebar />
                </>
              }
            />
            <Route
              path="/table"
              element={
                <>
                  <Table />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
