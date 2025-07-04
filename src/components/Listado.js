import { Navigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from "@sweetalert/with-react";

function Listado (props) {
    
    let token = sessionStorage.getItem('token');
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=1aeabb44f43a9dd9dda9d0fdbf53257e&language=es-ES';
        axios.get(endPoint)
            .then(response => {
                let data = response.data.results;
                setMoviesList(data);
            })
            .catch(error => {
                swal(<h2>Error en el servicor de peliculas.</h2>)
            })
    },[]);

    return (
        <>
            {!token && <Navigate to='/' />}
            {!moviesList.length && <h4>No hay resultados</h4>}
            <div className="row">
                {moviesList.map((movie) => (
                    <div className="col-3 my-4" key={movie.id}>
                        <div className="card">
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className="card-img-top" alt="..." />
                            <button type="button" onClick={props.addRemoveFavs} data-movie-id={movie.id} className="btn btn-light btn-sm rounded-5 position-absolute my-1 mx-1 d-flex end-0 fs-6">❤️</button>
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.overview}</p>
                                <Link to={`/detalle?movieId=${movie.id}`} className="btn btn-primary">Detalles</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        </>
    )
}

export default Listado;