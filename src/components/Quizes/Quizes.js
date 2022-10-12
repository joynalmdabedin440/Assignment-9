import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizes = () => {
    const quizesLoader = useLoaderData();
    const quizes = quizesLoader.data;
    console.log(quizes);
    return (
        <div className='mt-4 text-primary'>
            <h1>Quiz Of {quizes.name }</h1>
            
        </div>
    );
};

export default Quizes;