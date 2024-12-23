import "../index.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Counter from "./Counter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contador" element={<Counter />} />
    </Routes>
  );
}

export default App;
