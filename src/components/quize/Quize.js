import React from 'react';
import "./Quize.css"
const Quize = ({ quize }) => {
    const { question, options, correctAnswer } = quize;

    const clickHandle = (value) => {
        if (value === correctAnswer) {
            alert('Your Answer is Correct.. ')
        }
        else {
            alert('Your Answer is Incorrect.Press Eye Button to see the Correct Answer..')
        }    
    }
    const handle = () => {   
            alert(correctAnswer)       
    }

    return (
        <div id='quiz' className='m-4'>

            <div className='d-flex justify-content-between'>
                <h3>{question}</h3>
                <button onClick={handle} id='eye-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="" fill="currentColor">
                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                        <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>


            <div >
                {options.map(option => <div
                    className='m-2 border  p-2 rounded'>

                    <input

                        type="radio"
                        id="option"
                        value={option}
                        name="option"
                        onClick={() => clickHandle(option)}
                    />
                    <label className='ms-1' for={option}>
                        {option}
                    </label>

                </div>
                )};

            </div>
        </div>
    );
};

export default Quize;