import React, { useEffect, useState } from "react";
import NavbarAdm from "../../components/NavbarAdm";
import Button from 'react-bootstrap/Button';
import { Col, Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Table } from "react-bootstrap";
import BotoesNavegacao from "../../components/BotoesNavegacao";
import {api} from "../../services/api";
import Modal from "react-bootstrap/Modal";
import {useParams, Link} from "react-router-dom";

function Catalogo(){
    //Para exibir modal com dados de um filme
    const [show, setShow] = useState(false);
    const handleCloseMovie = () => setShow(false);
    const handleShowMovie = () => setShow(true);
    //Pegar dados dos filmes
    const [movies, setMovie] = useState([]);
    //Pegar dados de um filme específico

    useEffect(() => {
        api
            .get("filme")
            .then((response) => {
            setMovie(response.data);
            })
            .catch((err) => console.log(err));
    }, []);
    
    return(
        <div style={{
            backgroundColor:"#393939",
            color:"white",
        }}>
        <Container fluid style={{ backgroundColor: "#393939", color: "white", position: "absolute", height: "100%", width: "100%" }}>
            <div>
            <NavbarAdm/>
            <BotoesNavegacao/>
                <Form>
                    <Row className="align-items-center">
                        <Col sm={3} className="my-1">
                            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                                Name
                            </Form.Label>
                            <Form.Control id="inlineFormInputName" placeholder="Buscar" />
                            </Col>
                            <Col xs="auto" className="my-1">
                            <Button type="submit">BUSCAR</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <Table striped bordered hover size="sm" style={{backgroundColor:"white"}}>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">TÍTULO</th>
                            <th scope="col">GÊNERO</th>
                            <th scope="col">URL</th>
                            <th scope="col">EDITAR</th>
                            <th scope="col">DELETAR</th>
                        </tr>
                    </thead>
                    <tbody>
                    {movies.map((movieItem) => {
                        return (
                            <tr key={movieItem.id}>
                                <th scope="row">{movieItem.id}</th>
                                <td>{movieItem.titulo}</td>
                                <td>{movieItem.genero}</td>
                                <td>{movieItem.urlfilme}</td>
                                <td><Button onClick={() => editarFilme(movieItem.id)}>EDITAR</Button></td>
                                <td><Button onClick={() => deleteMovie(movieItem.id)}>DELETAR</Button></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
    
    function deleteMovie(idMovie) {
        let textoConfirmacao = "Você tem certeza de que deseja excluir este filme?";
        if(window.confirm(textoConfirmacao) == true) {
            api.delete(`/filme/${idMovie}`)
                .then((response) => {
                    setMovie(null);
                });
            window.location.reload(false);
        }
    }

    function editarFilme(idMovie) {
        let parametros = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
        width=700,height=300,left=-1000,top=-1000`;
        window.open(`/editarFilme/${idMovie}`,'teste',parametros);
    }
}


export default Catalogo;