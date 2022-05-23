import axios from "axios";
import swal from "@sweetalert/with-react";
import { useNavigate } from 'react-router-dom';

function Login () {

    const navigate = useNavigate()

    const submitHandler = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (email === '' || password === ''){
            swal(<h2>Los campos no pueden estar vacíos</h2>);
            return;
        }

        if (email !== '' && !regexEmail.test(email)){
            swal(<h2>Debes escribir una dirección de correo electrónico válida</h2>);
            return;
        }

        if (email !== 'challenge@alkemy.org' || password !== 'react'){
            swal(<h2>Credenciales inválidas</h2>);
            return;
        }

        axios
            .post('http://challenge-react.alkemy.org', { email, password })
            .then(res => {
                swal(<h2>Ingresaste correctamente</h2>);
                const userToken = res.data.token;
                localStorage.setItem('token', userToken);
                navigate('/listado');
            });
    }

    return(
        <>
            <h2>Formulario de login.</h2>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Correo electrónico:</label>
                    <input className="form-control" id="inputEmail" type="email" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPass" className="form-label">Contraseña:</label>
                    <input className="form-control" id="inputPass" type="password" name="password"/>
                </div>
                <button type="submit" className="btn btn-primary">Ingresar</button>
            </form>
        </>
    )
}

export default Login;

 