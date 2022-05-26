import swal from "@sweetalert/with-react";

function Buscador() {

    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value;

        if(keyword.length === 0){
            swal(<h5>Debes escribir una palabra clave para buscar</h5>)
        }
    }

    return (
        <form className="d-flex align-items-center" onSubmit={submitHandler}>
           <label className="form-label mb-0 mx-2">
                <input className="form-control" type="text" name="keyword" placeholder="Película..." />
           </label>
            <button className="btn btn-success" type="submit">Buscar</button>
        </form>
    )
}

export default Buscador;