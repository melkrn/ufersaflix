import React, { useState } from "react";
import './style.css';
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import NavbarUser from "../../components/NavbarUser";

const initialValues = {
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
}

function Cadastro(){

    const [values, setValues] = useState(initialValues);
    const [error, setErrors] = useState();
    const navigate = useNavigate();

    function onChange(e){
        const { name, value } = e.target;

        setValues({
            ...values, [name]: value
        });
    }

    function validar(){

        let controle = true;

        if(values.nome === ""){
            controle = false;
            alert(" Nome vazio ");
        }

        if(values.email === ""){
            controle = false;
            alert(" E-mail vazio ");
        }

        if(values.senha === ""){
            controle = false;
            alert(" Senha incorreta ");
        }

        if((values.senha !== values.confirmarSenha)){
            controle = false;
            alert(" Senha incorreta ");
        }
    }

    async function cadastrar(e) {
        e.preventDefault();

        if(!validar()){
            setValues(initialValues);
        }
        else{
            const userData = {
                nome: values.nome,
                email: values.email,
                senha: values.senha,
            }
            api.post("https://apiufersaflix.herokuapp.com/usuario/", userData)
            .then((response) => {
                console.log("response: " + response.status);
                console.log("data: " + response.data);
                alert("Cadastro Realizado");
                navigate('/login')
            }).catch((err)=>{
                console.error("erro cadastrar: " + err);
                setValues(initialValues);
            })
        }
    }

    const getBack = (e) => {
        e.preventDefault();
        navigate('/login')
    }

    return(
        <div>
            <NavbarUser />
            <div className="container">
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
                    <label>CONFIRMAR SENHA</label>
                    <br/>
                    <input 
                    type='password'
                    id='confirmarSenha'
                    name='confirmarSenha'
                    value={values.confirmarSenha}
                    onChange={onChange}
                    />
                    <br/>
                    <div>
                        <button className="botao-submit" type="submit" onClick={cadastrar}>CADASTRAR</button>
                        <button className="botao-voltar" type="submit" onClick={getBack}>VOLTAR</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Cadastro;