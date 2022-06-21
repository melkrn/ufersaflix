import React, { useState } from 'react';
import NavbarUser from '../../components/NavbarUser';
import CarouselSlideCard from '../../components/CarouselSlideCard';
import CarouselContainer from '../../components/CarouselContainer'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { useEffect } from 'react';
import { getUsers } from '../../services/api';

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
                <p>{row.urlimage}</p>
                <img src={require(`${row.urlimage}`)} alt={row.titulo}>

                </img>
            </div>
            )
        })
        return <h1>{rows}</h1>
    }

    return (
        <div style={{ backgroundColor: "#393939", color: "white" }}>
                <Container>
                <NavbarUser />
                <div>
                    <h1>
                        {renderMovies(movies)}
                    </h1>
                </div>
            </Container>
        </div>
    );
}

export default Home;


