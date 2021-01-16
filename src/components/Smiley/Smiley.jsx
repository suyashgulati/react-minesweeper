import React from 'react';
import './Smiley.css';

export default function Smiley(props) {
    return (
        <div className="Smiley">
            <img src={require("./Smiley.png")} alt="New Game" />
        </div>
    );
};
