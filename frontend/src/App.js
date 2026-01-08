import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Donate from "./pages/Donate";
import History from "./pages/History";
import Navbar from "./components/Navbar";

const PrivateRoute = ({ children }) => {
  return localStorage.getItem("user")
    ? children
    : <Navigate to="/" />;
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={
          <PrivateRoute><Dashboard /></PrivateRoute>
        } />

        <Route path="/donate/:type" element={
          <PrivateRoute><Donate /></PrivateRoute>
        } />

        <Route path="/history" element={
          <PrivateRoute><History /></PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
