import React from 'react';
import './Grid.css';
import Cell from '../Cell/Cell';

export default function Grid(props) {
    return (
        <div className="Grid">
            {props.grid.map((row, i) => {
                return row.map((col, j) => (
                    <Cell key={`${i}${j}`}>
                        {`${i}${j}`}
                    </Cell>
                ))
            })}
        </div>
    )
}