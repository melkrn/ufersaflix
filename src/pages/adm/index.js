import React, { useEffect, useState } from "react";
import NavbarAdm from "../../components/NavbarAdm";
import Button from 'react-bootstrap/Button';
import { Col, Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Table } from "react-bootstrap";
import BotoesNavegacao from "../../components/BotoesNavegacao";
import {api} from "../../services/api";

function Adm(){
    //Pegar dados de usuários
    const [users, setUser] = useState([]);
    useEffect(() => {
        api
            .get("usuario")
            .then((response) => {
            setUser(response.data);
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
                            <th scope="col">NOME</th>
                            <th scope="col">E-MAIL</th>
                            <th scope="col">SENHA</th>
                            <th scope="col">ADM</th>
                            <th scope="col">EDITAR</th>
                            <th scope="col">DELETAR</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map((userItem) => {
                        var adm = "Não";
                        if(userItem.adm == true) {
                            adm = "Sim";
                        }
                        return (
                            <tr key={userItem.id}>
                                <th scope="row">{userItem.id}</th>
                                <td>{userItem.nome}</td>
                                <td>{userItem.email}</td>
                                <td>{userItem.senha}</td>
                                <td>{adm}</td>
                                <td><Button onClick={() => updateUser(userItem.id)}>EDITAR</Button></td>
                                <td><Button onClick={() => deleteUser(userItem.id)}>DELETAR</Button></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
    function updateUser(idUser) {
        let parametros = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
        width=300,height=300,left=-1000,top=-1000`;
        window.open(`/editarUsuario/${idUser}`,'teste',parametros);
    }

    function deleteUser(idUser) {
        let textoConfirmacao = "Você tem certeza de que deseja excluir este filme?";
        if(window.confirm(textoConfirmacao) == true) {
            api
            .delete(`/usuario/${idUser}`)
            .then(() => {
                setUser(null)
                window.location.reload(false);
            });
        }
    }
}


export default Adm;