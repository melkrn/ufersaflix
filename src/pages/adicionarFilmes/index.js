import React, { useEffect, useState } from "react";
import NavbarAdm from "../../components/NavbarAdm";
import Button from 'react-bootstrap/Button';
import { Col, Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Table } from "react-bootstrap";
import BotoesNavegacao from "../../components/BotoesNavegacao";
import {api} from "../../services/api";


function AdicionarFilmes(){
    var filename = "";
    const [movie, setMovie] = useState({
        titulo: '',
        genero: '',
        urlimage: '',
        urlfilme: ''
    });

    const changeHandler=(e)=>{
        if (e.target.files.length > 0) {
         filename = e.target.files[0].name;
          filename = "../assets/movieCards/" + filename;
          movie.urlimage = filename
        }
      }

    return(
        <div style={{ backgroundColor: "#393939", color: "white", position: "absolute", height: "100%", width: "100%"}}>
            <NavbarAdm />
            <BotoesNavegacao />
            <div div style={{ backgroundColor: "#393939", color: "white", position: "absolute", height: "100%", width: "100%"}}>
                <br />
                <Form>
                    <div style={{width:"50%"}}>
                        <label>IMAGEM:</label><br/>
                        <input onChange={(e) => setMovie({ ...movie, urlimage: e.target.value })} 
                            type="text" style={{width:"100%"}}></input>
                    </div>
                    <br/>
                    <div>
                        <label>TÍTULO:</label><br/>
                        <input onChange={(e) => setMovie({ ...movie, titulo: e.target.value })} 
                            type="text" style={{width:"50%"}}></input>
                    </div>
                    <br/>
                    <div>
                        <label>LINK:</label><br/>
                        <input onChange={(e) => setMovie({ ...movie, urlfilme: e.target.value })} 
                            type="text" style={{width:"50%"}}></input>
                    </div>
                    <br/>
                    <div>
                        <label>GÊNERO:</label><br/>
                        <input onChange={(e) => setMovie({ ...movie, genero: e.target.value })}
                            type="text" style={{width:"50%"}}></input>
                    </div>
                    <br/>
                    <div>
                        <Button onClick={submeterFilme}>SALVAR</Button>
                    </div>
                </Form >
            </div>
        </div>
    )

    function submeterFilme() {
        var erro = false;
        if(movie.genero == "") {
            erro = true;
        }
        if(movie.urlimage == "") {
            erro = true;
        }
        if(movie.titulo == "") {
            erro = true;
        }
        if(movie.urlfilme == "") {
            erro = true;
        }
        if(erro == false) {
            api.post('/filme', movie)
            alert("Filme adicionado com sucesso!")
            window.location.reload(false);
        } else {
            alert("Todos os campos precisam ser preenchidos")
        }
    }
}



export default AdicionarFilmes;