function Login () {

    const submitHandler = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (email === '' || password === ''){
            console.log("Los campos no pueden estar vacíos");
            return;
        }

        if (email !== '' && !regexEmail.test(email)){
            console.log("Debes escribir una dirección de correo electrónico válida");
            return;
        }

        if (email !== 'challenge@alkemy.org' || password !== 'react'){
            console.log("Credenciales inválidas");
            return;
        }

        console.log("Todo ok para enviar tus datos");
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

 