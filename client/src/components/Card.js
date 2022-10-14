import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src='/image.jpeg'alt="" />
      </div>
      <div className='card-content'>
        <h2>{props.name}</h2>
        <p>{props.position}</p>
      </div>
    </div>
  )
}

export default Card