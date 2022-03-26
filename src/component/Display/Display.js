import React from 'react';
import './Display.css'

const Display = (props) => {
    const {img,name,calories,price,ratingsCount} = props.fruit; 

    const addToCart =() =>{
        console.log('clicked')
    }
    return (
        <div className='display'> 
            <div className="display-info">
                <img src={img} alt="" />
                <h2>Name: {name}</h2>
                <h2>Calories: {calories}</h2>
                <h4>Price: {price}</h4>
                <h5>Total Rating: {ratingsCount}</h5>
            </div>
            <button className='btn' onClick={addToCart}>Add To Cart</button>
        </div>
    );
};

export default Display;