import React from 'react';
import Card from 'react-bootstrap/Card';
import "./Topic.css"
const Topics = ({ topic }) => {
    const { name, logo } = topic;
    console.log(logo);
    return (
        <div id='topic-card' className='m-1'>
            <Card.Img variant="top" src={logo} />
            <Card.Body className='d-flex justify-content-between p-2'>
                <Card.Title>{name}</Card.Title>
               <button className='btn btn-primary'>Start Practice</button>
            </Card.Body>

        </div>
    );
};

export default Topics;