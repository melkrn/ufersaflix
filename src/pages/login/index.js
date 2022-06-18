import React, { useContext, useState } from "react";
import logoImage from '../../assets/LOGOloginpng.png';
import FormLogin from "../../components/FormLogin";
import { AuthContext } from "../../context/authContext";

function Login() {

    const { authenticated, login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div>
            <form>
                <label>E-MAIL</label>
                <input 
                type='email'
                name='email'
                id='email'
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                />
                <label>SENHA</label>
                <input 
                type='password'
                name='senha'
                id='senha'
                value={senha}
                onChange={(e)=>{setSenha(e.target.value)}}
                />
                <div>
                    <button type="submit" onClick={handleSubmit}>ENTRAR</button>
                </div>
            </form>
        </div>
    );
}

export default Login;