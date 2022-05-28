import { useEffect, useState } from 'react';

function Favoritos() {

    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        const favsLocal = localStorage.getItem('favs');

        if (favsLocal !== null) {
            const favsArray = JSON.parse(favsLocal);
            setFavoritos(favsArray);
        }
    }, []);

    return (
        <>
            <div className="row">
                {favoritos.map((movie) => (
                    <div className="col-3 my-4" key={movie.id}>
                        <div className="card">
                            <img src={movie.imgURL} className="card-img-top" alt="..." />
                            {/* <button type="button" onClick={props.addRemoveFavs} data-movie-id={movie.id} className="btn btn-light btn-sm rounded-5 position-absolute my-1 mx-1 d-flex end-0 fs-6">❤️</button> */}
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.overview}</p>
                                {/* <Link to={`/detalle?movieId=${movie.id}`} className="btn btn-primary">Detalles</Link> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        </>
    )
}

export default Favoritos;