import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quize from '../quize/Quize';

const Quizes = () => {
    const quizesLoader = useLoaderData();
    const quizes = quizesLoader.data.questions;
    console.log(quizes[0].id);
    return (
        <div className='mt-4 text-primary'>
            <h1>Quiz Of {quizesLoader.data.name}</h1>
            <div>
                {
                    quizes.map(quize => <Quize
                        key={quize.id}
                        quize={quize}
                    
                    ></Quize>)  
                }
            </div>
            
        </div>
    );
};

export default Quizes;