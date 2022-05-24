import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Listado() {

    const token = localStorage.getItem('token');
    const [ moviesList, setMoviesList ] = useState([]);

    useEffect(() => {
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=1aeabb44f43a9dd9dda9d0fdbf53257e';
        axios.get(endPoint)
            .then(response => {
                setMoviesList(response.data.results);
            })
    }, []);

    return (
        <>
            {!token && <Navigate to='/' />}
            <div className="row">
                <div className="col-3">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Listado;