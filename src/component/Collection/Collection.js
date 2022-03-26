import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import './Collection.css'
import '../AddToCart/AddToCart'
import AddToCart from '../AddToCart/AddToCart';

const Collection = () => {
    const [fruits,setFruits] =useState([]);
    const [cart , setCart] = useState([]);
    console.log(cart)
    const addToCart = (fruit) =>{
        const newCart = [...cart,fruit]
        setCart(newCart);
    }
   
    useEffect(()=>{
        fetch('fruits.json')
        .then(res => res.json())
        .then(data => setFruits(data))
    },[])

    
    return (
        <div className='collection'>
            <div className='fruitsCart-container'>
                {
                    fruits.map(fruit => <Display key={fruit.id} fruit={fruit} addToCart={addToCart}></Display>)
                }
            </div>
            <div className="addCart-list">
                <h1>Add To Cart List</h1>
                {cart.map(item => <AddToCart addItem={item}></AddToCart>)}

                    <button className='chooseBtn'>Choose Item</button>
            </div>
            
        </div>
    );
};

export default Collection;