import React, {useEffect, useState} from "react";
import Card from "../card/Card"
import './MovieList.css';
import {useParams} from "react-router-dom";

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const {type} =useParams()

    useEffect(() => {
        getData();
    }, []);

    useEffect(()=> {
        getData();
    }, [type]);

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=bbc2fa51ec2f4e9da5a811247c4bd868&language=en-US`)
    .then(res=>res.json())
    .then(data => setMovieList(data.results));
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Card movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList;