import React, { useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import {api} from "../../services/api";

function EditarFilme() {
    var {id} = useParams();
    //Pegar dados do filme
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        api
            .get(`/filme/${id}`)
            .then((response) => {
            setMovie(response.data);
            })
            .catch((err) => console.log(err));
    }, []);

    //Para editar dados do filme
    const [editMovie, setEditMovie] = useState([])

    //Para pegar URL da imagem
    var filename = "";
    const changeHandler=(e)=>{
        if (e.target.files.length > 0) {
         filename = e.target.files[0].name;
          filename = "../assets/movieCards/" + filename;
          editMovie.urlimage = filename
        }
    }

    return(
        <div fluid style={{ backgroundColor: "#393939", 
            color: "white", position: "absolute", height: "100%", width: "100%" }}>
            <Form>
                <div>
                    <label>IMAGEM:</label>
                    <input type="file" onChange={changeHandler}></input>
                </div>
                <br/>
                <div>
                    <label>TÍTULO:</label>
                    <input type="text" defaultValue={movie.titulo} 
                    onChange={(e) => setEditMovie({ ...editMovie, titulo: e.target.value })}></input>
                </div>
                <br/>
                <div>
                    <label>GÊNERO:</label>
                    <input type="text" defaultValue={movie.genero}
                    onChange={(e) => setEditMovie({ ...editMovie, genero: e.target.value })}></input>
                </div>
                <br/>
                <div>
                    <label>URL:</label>
                    <input type="text" defaultValue={movie.urlfilme}
                    onChange={(e) => setEditMovie({ ...editMovie, urlfilme: e.target.value })}></input>
                </div>
                <br/>
                <div>
                    <Button onClick={updateMovie}>SALVAR</Button>
                </div>
            </Form>
        </div>
    )

    function updateMovie() {
        if(editMovie.titulo == null || editMovie.titulo == "") {
            editMovie.titulo = movie.titulo;
        }
        if(editMovie.genero == null || editMovie.genero == "") {
            editMovie.genero = movie.genero;
        }
        if(editMovie.urlimage == null || editMovie.urlimage == "" ) {
            editMovie.urlimage = movie.urlimage;
        }
        if(editMovie.urlfilme == null || editMovie.urlfilme == "") {
            editMovie.urlfilme = movie.urlfilme;
        } 
        api
            .put(`/filme/${id}`, {
                titulo: editMovie.titulo,
                genero: editMovie.genero,
                urlimage: editMovie.urlimage,
                urlfilme: editMovie.urlfilme
                })
        .then((response) => {
            setEditMovie(response.data);
            alert("Filme editado com sucesso!")
            window.close()
        });
    }
}

export default EditarFilme;