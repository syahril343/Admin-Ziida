import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Auth/loginPage";
import Register from "./pages/Auth/registerPage";
import Dashboard from "./pages/Dashboard/Dashboard";

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
              path="/dashboard"
              element={
                <>
                  <Dashboard />
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
