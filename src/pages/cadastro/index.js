import React, { useState } from "react";
import './style.css';
import { api } from "../../services/api";
import { Container } from "reactstrap";
import { useNavigate } from "react-router-dom";
import NavbarUser from "../../components/NavbarUser";

const initialValues = {
    nome: '',
    email: '',
    senha: '',
}

function Cadastro(){

    const [values, setValues] = useState(initialValues);
    const navigate = useNavigate();

    function onChange(e){
        const { name, value } = e.target;

        setValues({
            ...values, [name]: value
        });
    }

    function cadastrar(e) {
        e.preventDefault();

        const userData = {
            nome: values.nome,
            email: values.email,
            senha: values.senha,
        }
        api.post("https://apiufersaflix.herokuapp.com/usuario/", userData)
        .then((response) => {
            console.log("response: " + response.status);
            console.log("data: " + response.data);
            navigate('/login')
        }).catch((err)=>{
            console.error("erro cadastrar: " + err);
        })
    }

    const getBack = (e) => {
        e.preventDefault();
        navigate('/login')
    }

    return(
        <div className="container">
            <Container>
                <NavbarUser/>
                <form className="formulario">
                    <div>
                        <h1 className="titulo">CADASTRE-SE</h1>
                    </div>
                    <label>NOME</label>
                    <br/>
                    <input 
                    type='text'
                    id='nome'
                    name="nome"
                    value={values.nome}
                    onChange={onChange}
                    />
                    <br/>
                    <label>E-MAIL</label>
                    <br/>
                    <input 
                    type='email'
                    id='email'
                    name="email"
                    value={values.email}
                    onChange={onChange}
                    />
                    <br/>
                    <label>SENHA</label>
                    <br/>
                    <input 
                    type='password'
                    id='password'
                    name='senha'
                    value={values.senha}
                    onChange={onChange}
                    />
                    <br/>
                    <div>
                        <button className="botao-submit" type="submit" onClick={cadastrar}>CADASTRAR</button>
                        <button className="botao-voltar" type="submit" onClick={getBack}>VOLTAR</button>
                    </div>
                </form>
            </Container>
            <p>{values.nome}</p>
            <br/>
            <p>{values.email}</p>
            <br/>
            <p>{values.senha}</p>
        </div>
    )
}

export default Cadastro;