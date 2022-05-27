import swal from "@sweetalert/with-react";
import { useNavigate } from 'react-router-dom';

function Buscador() {

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
        console.log(keyword)

        if(keyword.length === 0){
            swal(<h5>Debes escribir una palabra clave para buscar</h5>)
        } 
        else if(keyword.length < 4){
            swal(<h5>Debes escribir por lo menos 4 caracteres para buscar</h5>)
        } 
        else{
            e.currentTarget.keyword.value = '';
            navigate(`/resultado?keyword=${keyword}`, { replace: true });
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