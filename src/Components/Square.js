import React from 'react'
import '../App.css';

export default function Square({ value, chooserSquare }) {
    return (
        <div className='square' onClick={chooserSquare}>
            {value}
        </div>
    )
}
