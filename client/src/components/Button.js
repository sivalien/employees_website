import React from "react";
import './Button.css';
import { Link } from "react-router-dom";

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    return (
        <Link to='/employees' className="btn-mobile">
            <button className="btn">
                {children}
            </button>
        </Link>
    )
};