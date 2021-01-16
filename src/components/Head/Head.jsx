import React from 'react';
import './Head.css';
import Smiley from '../Smiley/Smiley';
import ScoreBoard from '../ScoreBoard/ScoreBoard';

export default function Head(props) {
    return (
        <div className="Head">
            <ScoreBoard />
            <Smiley />
            <ScoreBoard />
        </div>
    );
};
