import Login from "./component/Login";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Signup from "./component/Signup";
import Home from "./component/Home";
import { useState } from "react";
import RefreshHanlder from "./component/RefreshHanlder";
import Navbar from "./component/Navbar";
import Manager from "./component/Manager";
import Footer from "./component/Footer";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const PrivateRouting = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div>
      <RefreshHanlder setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/home" element={<PrivateRouting element={<><Navbar/><Manager/><Footer/></>} />} />
      </Routes>
    </div>
  );
}

export default App;
