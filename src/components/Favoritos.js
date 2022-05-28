import { Link, Navigate } from 'react-router-dom';

function Favoritos(props) {

    let token = sessionStorage.getItem('token');

    return (
        <>
            {!token && <Navigate to='/' />}
            <h2>Favoritos</h2>
            {!props.favoritos.length && <h5 className='text-danger'>No tienes favoritos agregados.</h5>}
            <div className="row">
                {props.favoritos.map((movie) => (
                    <div className="col-3 my-4" key={movie.id}>
                        <div className="card">
                            <img src={movie.imgURL} className="card-img-top" alt="..." />
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

export default Favoritos;