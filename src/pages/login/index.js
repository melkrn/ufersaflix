import React, { useContext, useState } from "react";
import logoImage from '../../assets/LOGOloginpng.png';
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import './style.css';
import { Container } from "react-bootstrap";

function Login() {

    const { authenticated, login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setSenha] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    }

    const goRegister = (e) => {
        e.preventDefault();
        navigate('/cadastro')
    }

    return(
        <div>
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
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <br/>
                    <label>SENHA</label>
                    <br/>
                    <input 
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={(e)=>{setSenha(e.target.value)}}
                    />
                    <div className="buttons">
                        <button className="button-entrar" type="submit" onClick={handleSubmit}>ENTRAR</button>
                        <button className="button-registrar" type="submit" onClick={goRegister}>REGISTRAR</button>
                    </div>
                </form>
            </Container>
        </div>
    );
}

export default Login;