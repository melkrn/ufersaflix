import React, { useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import {api} from "../../services/api";

function EditarUsuario() {
    var {id} = useParams();
    //Pegar dados do usuario
    const [user, setUser] = useState([]);
    useEffect(() => {
        api
            .get(`/usuario/${id}`)
            .then((response) => {
            setUser(response.data);
            })
            .catch((err) => console.log(err));
    }, []);

    //Para editar dados do filme
    const [editUser, setEditUser] = useState([]);
    return(
        <div fluid style={{ backgroundColor: "#393939", 
            color: "white", position: "absolute", height: "100%", width: "100%" }}>
            <Form>
                <div>
                    <label>NOME:</label>
                    <input type="text" defaultValue={user.nome} 
                    onChange={(e) => setEditUser({ ...editUser, nome: e.target.value })}></input>
                </div>
                <br/>
                <div>
                    <label>E-MAIL:</label>
                    <input type="text" defaultValue={user.email}
                    onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}></input>
                </div>
                <br/>
                <div>
                    <label>SENHA:</label>
                    <input type="text" defaultValue={user.senha}
                    onChange={(e) => setEditUser({ ...editUser, senha: e.target.value })}></input>
                </div>
                <br/>
                <div>
                    <Button onClick={updateUser}>SALVAR</Button>
                </div>
            </Form>
        </div>
    )

    function updateUser() {
        if(editUser.nome == null || editUser.nome == "") {
            editUser.nome = user.nome;
        }
        if(editUser.email == null || editUser.email == "") {
            editUser.email = user.email;
        }
        if(editUser.senha == null || editUser.senha == "" ) {
            editUser.senha = user.senha;
        }
        api
            .put(`/usuario/${id}`, {
                nome: editUser.nome,
                email: editUser.email,
                senha: editUser.senha,
                })
        .then((response) => {
            setEditUser(response.data);
            alert("Usuário editado com sucesso!")
            window.close()
        });
    }
}

export default EditarUsuario;