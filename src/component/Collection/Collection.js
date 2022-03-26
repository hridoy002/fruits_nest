import React, { useEffect, useState } from 'react';

const Collection = () => {
    const [fruits,setFruits] =useState([]);
    useEffect(()=>{
        fetch('fruits.json')
        .then(res => res.json())
        .then(data => setFruits(data))
    },[])
    return (
        <div>
            {
                fruits.map(fruit => <img style={{width:'200px'}} src={fruit.img} alt='' />)
            }
        </div>
    );
};

export default Collection;