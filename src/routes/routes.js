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
import Cadastro from "../pages/cadastro";
import ConfigUsuario from "../pages/configUsuario"
import Filmes from "../pages/filmes";
import Series from "../pages/series";
import Catalogo from "../pages/catalogo/index";
import AdicionarFilmes from "../pages/adicionarFilmes/index";
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
          </Routes>
        </AuthProvider>
    </BrowserRouter>
  )
}

export default Rotas;

