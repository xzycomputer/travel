import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Find from "./pages/Find";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/find" element={<Find/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
