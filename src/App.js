import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Establishments from "./Pages/Establishments/Establishments";
import Establishment from "./Pages/Establishment/Establishment";
import Register from "./Pages/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="body">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/establishments" element={<Establishments />} />
          <Route exact path="/establishment/:id" element={<Establishment />} />
          <Route exact path="/signup" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div className="header">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
