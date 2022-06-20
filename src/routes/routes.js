import React, { useContext, useState } from "react";
import { 
  Route, 
  BrowserRouter, 
  Routes,
  Navigate,
} from "react-router-dom";

import Login from "../pages/login";
import Home from "../pages/home";
import Adm from "../pages/adm";
import Busca from "../pages/busca";
import ConfigUsuario from "../pages/configUsuario"
import Filmes from "../pages/filmes";
import Cadastro from "../pages/cadastro";
import AdicionarFilmes from "../pages/adicionarFilmes";
import Catalogo from "../pages/catalogo";
import { AuthContext, AuthProvider } from "../context/authContext";

const Rotas = () => {

  const Private = ({children}) => {
    const { authenticated, loading } = useContext(AuthContext);

    if(loading){
      return <div>Carregando...</div>
    }

    if(!authenticated){
      return <Navigate to='/login' />;
    }
    return children;
  }

  return (
    <BrowserRouter>
      <AuthProvider>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<Private><Home /></Private>} />
            <Route exact path="/cadastro" element={<Cadastro />} />
            <Route exact path="/filmes" element={<Filmes />} />
            <Route exact path="/adm" element={<Adm />} />
            <Route exact path="/configUsuario" element={<ConfigUsuario />} />
            <Route exact path="/busca" element={<Busca />} />
            <Route exact path="/adicionarFilmes" element={<AdicionarFilmes />} />
            <Route path={"/catalogo/:id"} element={<Catalogo />}/>
          </Routes>
        </AuthProvider>
    </BrowserRouter>
  )
}

export default Rotas;

