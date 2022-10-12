import React from 'react';
import { useLoaderData } from 'react-router-dom';


import Statistic from '../statistic/Statistic';

const Statistics = () => {
  const quizNumber = useLoaderData()

  const quiz = quizNumber.data;



  return (
    <div>
      {
        quiz.map(quz => <Statistic
          key={quz.id}
          quz={quz}

        ></Statistic>)
      }
    </div>

  );
};

export default Statistics;