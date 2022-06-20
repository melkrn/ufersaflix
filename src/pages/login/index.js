import React, { useContext, useState, useEffect } from "react";
import logoImage from '../../assets/LOGOloginpng.png';
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import './style.css';
import { Container } from "react-bootstrap";

const initialValues = {
    email: '',
    senha: '',
}

function Login() {

    const { authenticated, login } = useContext(AuthContext);
    const [values, setValues] = useState(initialValues);
    const navigate = useNavigate();

    function onChange(e){
        const { name, value } = e.target;
        setValues({...values, [name]: value});
    }


    async function onSubmit(e){
        e.preventDefault();

        const userData = {
            email: values.email,
            senha: values.senha,
        }

        api.get("https://apiufersaflix.herokuapp.com/usuario", userData)
        .then((response) => {
            login(userData.email, userData.senha);
        }).catch((err)=>{
            console.error("erro login: " + err.response.data);
            setValues(initialValues);
        })
    }

    const goRegister = (e) => {
        e.preventDefault();
        navigate('/cadastro')
    }

    return(
        <div className="container">
            <Container>
                <div className="title">
                   <img src={logoImage}></img>
                </div>
                <form className="form-login">
                    <label>E-MAIL</label>
                    <br/>
                    <input 
                    type='email'
                    name='email'
                    id='email'
                    value={values.email}
                    onChange={onChange}
                    />
                    <br/>
                    <label>SENHA</label>
                    <br/>
                    <input 
                    type='password'
                    autoComplete="off"
                    name='senha'
                    id='senha'
                    value={values.senha}
                    onChange={onChange}
                    />
                    <div className="buttons">
                        <button className="button-entrar" type="submit" onClick={onSubmit}>ENTRAR</button>
                        <button className="button-registrar" type="submit" onClick={goRegister}>REGISTRAR</button>
                    </div>
                </form>
            </Container>
        </div>
    );
}

export default Login;