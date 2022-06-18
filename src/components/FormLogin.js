import React, { useState } from "react";

const initialState = {
    email: '',
    senha: '',
}

const FormLogin = (props) => {

    const [ values, setValues ] = useState(initialState);

    function submitForm(e) // função que irá passar os dados para a tela login
    {
        props.ratinho(values);
    }

    function handleChange(event)
    {
        const { name, value } = event.target;
        setValues({
            [name]: value,
        })
    }

    return(
        <div>
            <form>
                <label>E-MAIL</label>
                <input 
                type='email'
                id='email-cliente'
                name='email'
                onChange={handleChange}
                />
                <span></span>
                <label>SENHA</label>
                <input 
                type='password'
                id='senha-cliente'
                name="senha"
                onChange={handleChange}
                />
                <span></span>
                <input 
                type='button'
                value='Entrar'
                onClick={submitForm}
                />
            </form>
        </div>
    )
}

export default FormLogin;