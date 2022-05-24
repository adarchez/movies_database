import { Navigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Listado() {

    const token = localStorage.getItem('token');
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=1aeabb44f43a9dd9dda9d0fdbf53257e';
        axios.get(endPoint)
            .then(response => {
                let data = response.data.results;
                setMoviesList(data);
            })
    },[]);

    return (
        <>
            {!token && <Navigate to='/' />}
            <div className="row">
                {moviesList.map((movie) => (
                    <div className="col-3 my-4" key={movie.id}>
                        <div className="card">
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.overview}</p>
                                <Link to="/" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        </>
    )
}

export default Listado;