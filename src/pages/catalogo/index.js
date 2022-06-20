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
    let {id} = useParams();
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
                            <th scope="col">DIRETOR</th>
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
                                <td>{movieItem.diretor}</td>
                                <td><Button onClick={handleShowMovie}><Link to={`/filme/${movieItem.id}`} 
                                style={{textDecoration:"inherit",color:"inherit"}}>EDITAR</Link></Button></td>
                                    <Modal show={show} onHide={handleCloseMovie} animation={false}>
                                        <Modal.Header closeButton>
                                        <Modal.Title>Editar {movieItem.titulo}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                                <div>
                                                    <img src={movieItem.urlimage}></img> <br />
                                                    {id}
                                                </div>
                                                <br />
                                                <div>
                                                    <span>Título:</span> <br />
                                                    <input id="titulo" type="text" defaultValue={movieItem.titulo}></input>
                                                    
                                                </div>
                                                <br />
                                                <div>
                                                    <span>URL:</span> <br />
                                                    <input id="urlfilme" type="text" defaultValue={movieItem.urlfilme}></input>
                                                </div>
                                                <br />
                                                <div>
                                                    <span>Elenco:</span> <br />
                                                    <textarea defaultValue={movieItem.elenco} cols="50" rows="5"></textarea>
                                                </div>
                                                <br />
                                                <div>
                                                    <span>Sinopse:</span> <br />
                                                    <textarea defaultValue={movieItem.sinopse} cols="50" rows="5"></textarea>
                                                </div>
                                                <br />
                                                <div>
                                                    <span>Gênero:</span> <br />
                                                    <input id="genero" type="text" value={movieItem.genero}></input>
                                                </div>
                                                <br />
                                                <div>
                                                    <span>Diretor:</span> <br />
                                                    <input id="diretor" type="text" value={movieItem.diretor}></input>
                                                </div>

                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                        <Button variant="secondary" onClick={handleCloseMovie}>
                                            Fechar
                                        </Button>
                                        <Button variant="primary" onClick={handleCloseMovie}>
                                            Salvar mudanças
                                        </Button>
                                        </Modal.Footer>
                                    </Modal>
                                <td><Button onClick={() => deleteUser(movieItem.id)}>DELETAR</Button></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
    
    function updateUser(userItem) {
        api
            .put(`/usuario/${userItem.id}`, {
                nome: prompt("Digite um novo nome: ", userItem.nome),
                email: prompt("Digite um novo e-mail: ", userItem.email),
                senha: prompt("Digite uma nova senha: ", userItem.senha),
                })
        .then((response) => {
            setMovie(response.data);
        });
        window.location.reload(false);
    }

    function deleteUser(idMovie) {
        let textoConfirmacao = "Você tem certeza de que deseja excluir este filme?";
        if(window.confirm(textoConfirmacao) == true) {
            api.delete(`/filme/${idMovie}`)
                .then((response) => {
                    setMovie(response.data);
                });
            window.location.reload(false);
        }
    }
}


export default Catalogo;