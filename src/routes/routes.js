import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

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

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Login />} path="/login" />
        <Route element={<Adm />} path="/adm" />
        <Route element={<Catalogo />} path="/catalogo" />
        <Route element={<AdicionarFilmes />} path="/adicionarFilmes" />
        <Route element={<Busca />} path="/busca" />
        <Route element={<Cadastro />} path="/cadastro" />
        <Route element={<ConfigUsuario />} path="/configUsuario" />
        <Route element={<Filmes />} path="/filmes" />
        <Route element={<Series />} path="/series" />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas;

