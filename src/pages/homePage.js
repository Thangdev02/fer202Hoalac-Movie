import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieTable from '../components/myTable';
import axios from 'axios';
import Sidebar from '../components/sideBar';

const HomePage = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9999/genres')
            .then(response => {
                setGenres(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);
    return (
        <div style={{ display: "flex" }}>
            <Sidebar/>
            <div style={{ flex: 1 }}>
            <h2 style={{ textAlign: "center" }}>React Application</h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "20px" }}>
                {genres.map((genre) => (
                    <Link key={genre.id} to={`/movie?genre=${encodeURIComponent(genre.name)}`}>
                        {genre.name.toUpperCase()}
                    </Link>
                ))}
            </div>

            <MovieTable />
            </div>
        </div>
    );
};

export default HomePage;