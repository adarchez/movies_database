import axios from "axios";
import { useEffect, useState } from 'react';
import swal from "@sweetalert/with-react";
import { Navigate, Link } from 'react-router-dom';

function Resultado() {

    let token = sessionStorage.getItem('token');
    let queryString = new URLSearchParams(window.location.search);
    let keyString = queryString.get("keyword");

    const [moviesResults, setMoviesResults] = useState([]);

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=1aeabb44f43a9dd9dda9d0fdbf53257e&language=es-ES&query=${keyString}`;
        axios.get(endPoint)
            .then(response => {
                let moviesArray = response.data.results;
                setMoviesResults(moviesArray);
            })
            .catch(error => {
                swal(<h5>Error en el servidor de la API</h5>)
            })
    }, [moviesResults])

    return (
        <>
            {!token && <Navigate to='/' />}
            <div className="row">
                <h2>Resultados de la búsqueda: <em>{keyString}</em></h2>
                {moviesResults.length === 0 && <h4>No hay resultados</h4>}
                {moviesResults.map((movie) => (
                    <div className="col-3 my-4" key={movie.id}>
                        <div className="card">
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <Link to={`/detalle?movieId=${movie.id}`} className="btn btn-primary">Detalles</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        </>
    )
}

export default Resultado;