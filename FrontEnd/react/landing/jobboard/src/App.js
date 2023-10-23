import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Propos from "./pages/Propos";
import Inscrip from "./pages/Inscrip";
import Connexi from "./pages/Connex";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/pages/index.scss";
import Login from "./components/Login";


const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/inscription" element={<Inscrip />} />
        <Route path="/connexion" element={<Connexi />} />
        <Route path="/signup" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
