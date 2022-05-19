import axios from "axios";
import swal from "@sweetalert/with-react";

function Login () {

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
                console.log(res.data);
            });
    }

    return(
        <>
            <h2>Formulario de login.</h2>
            <form onSubmit={submitHandler}>
                <label>
                    <span>Correo electrónico:</span><br />
                    <input type="email" name="email" />
                </label>
                <br />
                <label>
                    <span>Contraseña:</span><br />
                    <input type="password" name="password"/>
                </label>
                <br />
                <button type="submit">Ingresar</button>
            </form>
        </>
    )
}

export default Login;

 