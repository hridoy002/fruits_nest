import React from 'react';
import './Ask.css'

const Ask = () => {
    return (
        <div className='ask'>
            <h1>Frequently Asked Question</h1>
            <div className='question-ask'>
                <h2>1.How to Reacts work?</h2>
                <p>React is a popular javascript library.It helps to develop  web UI(User Interfaces).React use virtual DOM to develop perfomance.Before invented of React,The developer used DOM but that was very slow.But react work effeciently to uses Virtual DOM</p>
            </div>
            <div className='question-ask'>
                <h2>2.How does useState work?</h2>
                <p>useState is very important elements in react.It is a hook which is a special function.If write a function component and need to add some state to it,convert it to a class.Then use a Hook inside the existing function component. We are going to do that right now. useState allows to declare one or more state variables in function components.It can track state and then update it.</p>
            </div>

        </div>
    );
};

export default Ask;