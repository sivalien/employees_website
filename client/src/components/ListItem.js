import { MdAccountCircle } from "react-icons/md";
import React from 'react';
import './ListItem.css';

function ListItem(props) {
  return (
    <div className="item">
        <div className="item-text">
        <h3>{props.name}</h3>
        <h4>{props.position}</h4>
        </div>
        <div className='icon'>
            < MdAccountCircle />
        </div>
    </div>
  )
}

export default ListItem