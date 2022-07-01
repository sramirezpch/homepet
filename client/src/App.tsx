import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "src/components/common/Navbar";

import { Main } from "src/components/pages/main/Main";
import { Login } from "./components/pages/login/Login";
import { Signup } from "./components/pages/signup/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Navbar>
              <Main />
            </Navbar>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
