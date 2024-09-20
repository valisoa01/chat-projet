import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
