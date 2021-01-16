import React from 'react';
import './Board.css';
import Grid from '../Grid/Grid';
import Head from '../Head/Head';

export default function Board(props) {
    return (
        <div className="Board">
            <Head />
            <Grid grid={props.grid} />
        </div>
    );
};
