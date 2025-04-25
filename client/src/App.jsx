import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tickets" element={<h1>Tickets</h1>} />
        <Route path="/features" element={<h1>features</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
