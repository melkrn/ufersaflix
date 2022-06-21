import React from "react";
import { ReactDOM } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


class BotoesNavegacao extends React.Component{
    render(){
        return(
        
        <Container fluid>
            <div>
                <Link to="/adm"><Button variant="outline-primary">Usuário</Button>{' '}</Link>
                <Link to="/catalogo"><Button variant="outline-primary">Catálogo</Button>{' '}</Link>
                <Link to="/adicionarFilmes"><Button variant="outline-primary">Adicionar filmes</Button>{' '}</Link>
            </div>
        </Container>
        )
    }
}


export default BotoesNavegacao;