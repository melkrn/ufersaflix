import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import { api, getMovies } from "../services/api";
import './style.css';

function Row({movies}){

    const [trailerUrl, setTrailerUrl] = useState("");
    const handleOnClick = (movie) => {
        if (trailerUrl) {
        setTrailerUrl("");
        } else {
        movieTrailer(movie.titulo || "")
            .then((url) => {
            setTrailerUrl(url);
            })
            .catch((error) => {
            console.log("Error fetching movie trailer: ", error);
            });
        }
    };

    return(
        <div className="row-container">
            <h2 className="row-header"></h2>
            <div className="row-cards">
            {
                movies?.map((movie) => {
                    return(
                        <div>
                            <h1 className="title-card">{movie.titulo}</h1>
                            <img 
                            className="movie-card"
                            key={movie.id}
                            onClick={() => handleOnClick(movie)}
                            src={movie.urlimage} 
                            alt={movie.titulo}>
                            </img>
                        </div>
                    )
                })
            }
            </div>
            {trailerUrl && <ReactPlayer url={trailerUrl} playing={true} />}
        </div>
    )
}

export default Row;