import React from "react";
import NavbarAdm from "../../components/NavbarAdm";
import Button from 'react-bootstrap/Button';
import { Col, Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Table } from "react-bootstrap";
import BotoesNavegacao from "../../components/BotoesNavegacao";

function Adm(){
    return(
        <div style={{
            backgroundColor:"#393939",
            color:"white",
        }}>
            <Container fluid>
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
                            <th scope="col">STATUS</th>
                            <th scope="col">NOME</th>
                            <th scope="col">E-MAIL</th>
                            <th scope="col">MATRÍCULA</th>
                            <th scope="col">DATA DE NASCIMENTO</th>
                            <th scope="col">EDITAR</th>
                            <th scope="col">DELETAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>ON</td>
                            <td>João</td>
                            <td>joao@gmail.com</td>
                            <td>2222****</td>
                            <td>00/00/0000</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>ON</td>
                            <td>Lucas</td>
                            <td>lucas@gmail.com</td>
                            <td>2222****</td>
                            <td>00/00/0000</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>ON</td>
                            <td>Pedro</td>
                            <td>pedro@gmail.com</td>
                            <td>2222****</td>
                            <td>00/00/0000</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default Adm;