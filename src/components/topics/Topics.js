import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./Topic.css"
const Topics = ({ topic }) => {
    const { name, logo, id,total } = topic;

    return (
        <div id='topic-card' className='m-1'>
            <Card.Img variant="top" src={logo} />
            <Card.Body className='d-flex justify-content-between p-2'>
                <Card.Title>{name}</Card.Title>
                <p>Q:{total}</p>

                <Link to={`/home/${id}`}>
                    <button className='btn btn-primary'>Start Practice</button>
                </Link>
            </Card.Body>

        </div>
    );
};

export default Topics;