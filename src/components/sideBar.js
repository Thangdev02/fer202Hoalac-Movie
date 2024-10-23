// src/components/Sidebar.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';

const Sidebar = () => {
    const [producers, setProducers] = useState([]);

    useEffect(() => {
        // Fetch producers from the JSON server
        axios.get('http://localhost:9999/producers')
            .then(response => {
                setProducers(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the producers!", error);
            });
    }, []);

    return (
        <div style={{ padding: "10px", borderRight: "1px solid #dee2e6" }}>
            <h5>Producers</h5>
            <ListGroup variant="flush">
                {producers.map((producer) => (
                    <ListGroup.Item key={producer.id}>
                        <Link to={`/movie?producer=${encodeURIComponent(producer.name)}`}>
                            {producer.name}
                        </Link>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default Sidebar;
