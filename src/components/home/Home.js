import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../topics/Topics';
import "./Home.css"
const Home = () => {
    const dataLoader = useLoaderData();
    
    const topics = dataLoader.data;
    return (
        <div className='mt-5'>
            <div id='home-background'>
                <h1>Participet at least one quiz topic from below.For judge YOURSELF.</h1>
            </div>
            <div id='home-card' className='mt-5 mb-5'>
                {
                    topics.map(topic => <Topics
                        key={topic.id}
                        topic={topic}
                    ></Topics>)
                }
            </div>


        </div>
    );
};

export default Home;