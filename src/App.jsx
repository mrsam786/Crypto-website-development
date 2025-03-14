import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage.jsx";
function App() {
  return (
    <div className="bg-back_color">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
