import React, { useState } from 'react';
import NavbarUser from '../../components/NavbarUser';
import CarouselSlideCard from '../../components/CarouselSlideCard';
import CarouselContainer from '../../components/CarouselContainer'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { useEffect } from 'react';
import { getUsers } from '../../services/api';
import {api} from "../../services/api"
import {Container} from "react-bootstrap";
import img from "../../assets/movieCards/cardfilme.jpg"
import Row from "../../components/Row";
function Home() {

    const [movies, setMovies] = useState([]);

    const fetchMovies = async() => {

        api.get("https://apiufersaflix.herokuapp.com/filme")
        .then((response) => {
            setMovies(response.data)
        }).catch((err)=>{
            console.log("Fetch Movies error: " + err);
        })
    }

    useEffect(()=>{
        fetchMovies();
    },[])

    function renderMovies(movies){
        const rows = movies.map((row, index) => {
            return(
            <div>
                <img src={row.urlimage} />
                <img src={img}/>
            </div>
            )
        })
        return rows
    }

    return (
        <div style={{ backgroundColor: "#393939", color: "white" }}>
                <NavbarUser />
                <div>
                    <Row movies={movies}/>
                </div>
        </div>
    );
}

export default Home;


