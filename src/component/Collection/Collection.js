import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import './Collection.css'

const Collection = () => {
    const [fruits,setFruits] =useState([]);
    useEffect(()=>{
        fetch('fruits.json')
        .then(res => res.json())
        .then(data => setFruits(data))
    },[])

    const [cart , setCart] = useState([]);
    const addToCart = (fruit) =>{
        const newCart =[...cart, fruit]
        setCart(newCart)
        console.log(cart)
    }
    return (
        <div className='collection'>
            <div className='fruitsCart-container'>
                {
                    fruits.map(fruit => <Display key={fruit.id} fruit={fruit} addToCart={addToCart}></Display>)
                }
            </div>
            <div className="addCart-list">
                <h3>{}</h3>
            </div>
            
        </div>
    );
};

export default Collection;