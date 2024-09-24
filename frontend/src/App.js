import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/ HomePage"; // Utilise "Body" avec une majuscule
import Login from "./pages/login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
 
        <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
