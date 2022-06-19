import React, { useState } from "react";
import './style.css';
import { Container } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { api, setUsers } from "../../services/api";

function Cadastro(){

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [matricula, setMatricula] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("foi")
        setUsers(nome, email, matricula, password);
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
                    value={nome}
                    id='nome'
                    name="nome"
                    onChange={(e)=>{setNome(e.target.value)}}
                    />
                    <br/>
                    <label>E-MAIL</label>
                    <br/>
                    <input 
                    type='email'
                    value={email}
                    id='email'
                    name="email"
                    onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <br/>
                    <label>MATRÍCULA</label>
                    <br/>
                    <input 
                    type='text'
                    value={matricula}
                    id='matricula'
                    name="matricula"
                    onChange={(e)=>{setMatricula(e.target.value)}}
                    />
                    <br/>
                    <label>SENHA</label>
                    <br/>
                    <input 
                    type='password'
                    value={password}
                    id='password'
                    name='password'
                    onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <br/>
                    <label>CONFIRMAR SENHA</label>
                    <br/>
                    <input 
                    type='password'
                    value={confirmPassword}
                    name='confirmPassword'
                    id="confirmPassword"
                    onChange={(e)=>{setConfirmPassword(e.target.value)}}
                    />
                    <div>
                        <button className="botao-submit" type="submit" onClick={onSubmit}>CADASTRAR</button>
                        <button className="botao-voltar" type="submit" onClick={getBack}>VOLTAR</button>
                    </div>
                </form>
            </Container>
        </div>
    )
}

export default Cadastro;