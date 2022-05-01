import "./App.scss";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Register/>} />
          <Route path="/main" element={<Home/>} />
          <Route path="/signup" element={<Login/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
