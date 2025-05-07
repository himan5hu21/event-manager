import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Events from "./pages/Events";
import SingleEvent from "./pages/SingleEvent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<SingleEvent />} />
        <Route path="/features" element={<h1>features</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
