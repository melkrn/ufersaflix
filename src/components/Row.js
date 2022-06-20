import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";
// importar metodo getMovies

function Row({title, path}){
    const [movies, setMovies] = useState([]);

    const fetchMovies = async(_path) => {
        try {
            /*const data = await getMovies(_path);*/
            console.log("data + " + data);
            setMovies(data?.results);
        } catch (error) {
            console.log("Error fetchMovies: " + error);
        }
    }

    useEffect(()=>{
        fetchMovies(path);
    },[])

    return(
        <div>
            <h1>{title}</h1>
            <div>
                {
                    movies?.map((movie) => {
                        return(
                            <img
                            key={movie.id}
                            src={movie.path}
                            alt={movie.nome}
                            >
                            </img>
                        )
                    })
                }
            </div>
        </div>
    )

}