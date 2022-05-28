import { Routes, Route } from 'react-router-dom';

import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detalle from './components/Detalle';
import Resultado from './components/Resultado';
import Favoritos from './components/Favoritos';

import "./css/bootstrap.min.css";

function App() {


  const addRemoveFavs = e => {
    const favsMovies = localStorage.getItem('favs');
    let tempMoviesFavs;

    if (favsMovies === null) {
      tempMoviesFavs = [];
    }
    else {
      tempMoviesFavs = JSON.parse(favsMovies);
    }

    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;
    const movieData = {
      imgURL, title, overview,
      id: btn.dataset.movieId
    };
    let moviesExist = tempMoviesFavs.find(oneMovie => {
      return oneMovie.id === movieData.id
    });
    if (!moviesExist) {
      tempMoviesFavs.push(movieData);
      localStorage.setItem('favs', JSON.stringify(tempMoviesFavs));
      console.log('Se agregó la película');
    }
    else {
      let moviesLeft = tempMoviesFavs.filter(oneMovie => {
        return oneMovie.id !== movieData.id
      });
      localStorage.setItem('favs', JSON.stringify(moviesLeft));
      console.log('Se eliminó la película');
    }
  }

  return (
    <>
      <Header></Header>
      <div className='container mt-3'>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/listado" element={<Listado addRemoveFavs={addRemoveFavs} />}></Route>
          <Route path="/detalle" element={<Detalle />}></Route>
          <Route path="/resultado" element={<Resultado />}></Route>
          <Route path="/favoritos" element={<Favoritos />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
