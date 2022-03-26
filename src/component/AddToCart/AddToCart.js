import React from 'react';
import './AddToCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'

const AddToCart = (props) => {
    const {name,price,img} = props.addItem;
    return (
            <div className='addItem'>
            
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>{price}</p>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </div>
            
    );
};

export default AddToCart;