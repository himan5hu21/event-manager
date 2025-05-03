import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tickets" element={<h1>Tickets</h1>} />
        <Route path="/features" element={<h1>features</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
