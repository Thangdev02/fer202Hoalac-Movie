// src/components/MovieTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Container, Button, Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const MovieTable = () => {
  const [movies, setMovies] = useState([]); //tao 1 state de luu tru data sau khi goi tu sever ve
  const [loading, setLoading] = useState(true); //tao ra 1 state de thuc hien hanh dong loading
  const location = useLocation(); //dung de search url param


  useEffect(() => { 
    axios.get('http://localhost:9999/movies').then (response => {
      setMovies(response.data);
    })
  }, []);


//   useEffect(() => { // useEffect de goi api sau khi trang web duoc render.
//     const params = new URLSearchParams(location.search);
//     const producer = params.get('producer');

//     let url = 'http://localhost:9999/movies';
//     if (producer) {
//       url += `?producer=${encodeURIComponent(producer)}`;
//       console.log(url);
//     }

//     axios.get(url)
//       .then(response => {
//         console.log(response)
//         setMovies(response.data); //bat buoc
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the data!", error);
//         setLoading(false);
//       });
//   }, [location.search]);

//   if (loading) {
//     return (
//       <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
//         <Spinner animation="border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </Spinner>
//       </Container>
//     );
//   }



  return (
    <Container className="table-container mt-4">
      <h2 className="mb-4">List of Movies</h2>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Release</th>
            <th>Description</th>
            <th>Producer</th>
            <th>Director</th>
            <th>Genres</th>
            <th>Stars</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.release}</td>
              <td>{movie.description}</td>
              <td>{movie.producer}</td>
              <td>{movie.director}</td>
              <td>{movie.genres.join(', ')}</td>
              <td>{movie.stars.join(', ')}</td>
              <td>
                <Button variant="link" className="p-0 text-primary">
                  Add stars
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MovieTable;
