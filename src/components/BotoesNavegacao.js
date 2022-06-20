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
                <Button variant="outline-primary"><Link to="/adm">Usuario</Link></Button>{' '}
                <Button variant="outline-primary"><Link to="/catalogo">Catálogo</Link></Button>{' '}
                <Button variant="outline-primary"><Link to="/adicionarFilmes">Adicionar filmes</Link></Button>{' '}
            </div>
        </Container>
        )
    }
}


export default BotoesNavegacao;