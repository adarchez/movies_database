import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import swal from "@sweetalert/with-react";

function Detalle() {

    let token = sessionStorage.getItem('token');
    let query = new URLSearchParams(window.location.search);
    let movieId = query.get("movieId");

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=1aeabb44f43a9dd9dda9d0fdbf53257e&language=es-ES`;
        axios.get(endPoint)
            .then(response => {
                let data = response.data;
                setMovie(data);
            })
            .catch(error => {
                swal(error);
            })
    }, []);

    return (
        <>
            {!token && <Navigate to='/' />}
            {!movie && <p>Cargando...</p>}
            {movie && <>
                <h2>Título: {movie.title} </h2>
                <div className='row'>
                    <div className='col-4'>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid" alt="movie poster" />
                    </div>
                    <div className='col-8'>
                        <h5>Fecha de estreno: </h5><p>{movie.release_date}</p>
                        <h5>Reseña:</h5>
                        <p>{movie.overview}</p>
                        <h5>Rating: </h5> <p>{movie.vote_average}</p>
                        <h5>Géneros:</h5>
                        <ul>
                            {movie.genres.map((genre) => (
                                <li key={genre.id}>{genre.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
            }
        </>
    )
}

export default Detalle;