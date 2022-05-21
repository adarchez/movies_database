import { Routes, Route } from 'react-router-dom';

import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/listado" element={<Listado />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
