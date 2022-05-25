import { Routes, Route } from 'react-router-dom';

import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detalle from './components/Detalle';

import "./css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header></Header>
      <div className='container mt-3'>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/listado" element={<Listado />}></Route>
          <Route path="/detalle" element={<Detalle />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
