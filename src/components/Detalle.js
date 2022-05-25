import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import swal from "@sweetalert/with-react";

function Detalle () {

    let token = sessionStorage.getItem('token');
    let query = new URLSearchParams(window.location.search);
    let movieId = query.get("movieId");

    const [ movie, setMovie ] = useState([]);

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=1aeabb44f43a9dd9dda9d0fdbf53257e&language=es-ES`;
        axios.get(endPoint)
            .then(response => {
                let data = response.data.results;
                setMovie(data);
            })
            .catch(error => {
                swal(<h2>Error en el servidor de peliculas.</h2>)
            })
    },[]);

    return (
        <>
            { !token && <Navigate to='/' /> }
            <h2>Titulo: </h2>
            <div className='row'>
                <div className='col-4'>
                    Imagen
                </div>
                <div className='col-8'>
                    <h5>Fecha de estreno: </h5>
                    <h5>Reseñar: </h5>
                    <p>Lasjdkakjdsfnskjdnslfdasdma skdas djasd asdas</p>
                    <h5>Géneros:</h5>
                    <ul>
                        <li>Genero 1</li>
                        <li>Genero 2</li>
                        <li>Genero 3</li>
                        <li>Genero 4</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Detalle;